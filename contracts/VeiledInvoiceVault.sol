// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract VeiledInvoiceVault {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct Invoice {
        euint32 invoiceId;
        euint32 amount;
        euint32 discountRate;
        euint32 dueDate;
        ebool isActive;
        ebool isVerified;
        ebool isFunded;
        string description;
        address seller;
        address buyer;
        uint256 createdAt;
        uint256 fundedAt;
    }
    
    struct Bid {
        euint32 bidId;
        euint32 amount;
        euint32 discountRate;
        ebool isAccepted;
        address bidder;
        uint256 timestamp;
    }
    
    struct Escrow {
        euint32 escrowId;
        euint32 amount;
        ebool isReleased;
        address seller;
        address buyer;
        uint256 createdAt;
        uint256 releaseDate;
    }
    
    mapping(uint256 => Invoice) public invoices;
    mapping(uint256 => Bid) public bids;
    mapping(uint256 => Escrow) public escrows;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userVolume;
    
    uint256 public invoiceCounter;
    uint256 public bidCounter;
    uint256 public escrowCounter;
    
    address public owner;
    address public verifier;
    uint256 public platformFee; // in basis points (100 = 1%)
    
    event InvoiceCreated(uint256 indexed invoiceId, address indexed seller, string description);
    event BidPlaced(uint256 indexed bidId, uint256 indexed invoiceId, address indexed bidder, uint32 amount);
    event BidAccepted(uint256 indexed bidId, uint256 indexed invoiceId, address indexed bidder);
    event InvoiceFunded(uint256 indexed invoiceId, address indexed buyer, uint32 amount);
    event EscrowCreated(uint256 indexed escrowId, uint256 indexed invoiceId, address indexed buyer);
    event EscrowReleased(uint256 indexed escrowId, address indexed seller);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier, uint256 _platformFee) {
        owner = msg.sender;
        verifier = _verifier;
        platformFee = _platformFee;
    }
    
    function createInvoice(
        string memory _description,
        euint32 _amount,
        euint32 _discountRate,
        euint32 _dueDate
    ) public returns (uint256) {
        require(bytes(_description).length > 0, "Description cannot be empty");
        
        uint256 invoiceId = invoiceCounter++;
        
        invoices[invoiceId] = Invoice({
            invoiceId: _amount, // Will be set properly
            amount: _amount,
            discountRate: _discountRate,
            dueDate: _dueDate,
            isActive: Fhe.asEbool(true),
            isVerified: Fhe.asEbool(false),
            isFunded: Fhe.asEbool(false),
            description: _description,
            seller: msg.sender,
            buyer: address(0),
            createdAt: block.timestamp,
            fundedAt: 0
        });
        
        emit InvoiceCreated(invoiceId, msg.sender, _description);
        return invoiceId;
    }
    
    function placeBid(
        uint256 invoiceId,
        euint32 amount,
        euint32 discountRate
    ) public payable returns (uint256) {
        require(invoices[invoiceId].seller != address(0), "Invoice does not exist");
        require(Fhe.decrypt(invoices[invoiceId].isActive), "Invoice is not active");
        require(!Fhe.decrypt(invoices[invoiceId].isFunded), "Invoice already funded");
        
        uint256 bidId = bidCounter++;
        
        bids[bidId] = Bid({
            bidId: amount, // Will be set properly
            amount: amount,
            discountRate: discountRate,
            isAccepted: Fhe.asEbool(false),
            bidder: msg.sender,
            timestamp: block.timestamp
        });
        
        emit BidPlaced(bidId, invoiceId, msg.sender, Fhe.decrypt(amount));
        return bidId;
    }
    
    function acceptBid(uint256 invoiceId, uint256 bidId) public {
        require(invoices[invoiceId].seller == msg.sender, "Only seller can accept bid");
        require(bids[bidId].bidder != address(0), "Bid does not exist");
        require(Fhe.decrypt(invoices[invoiceId].isActive), "Invoice is not active");
        require(!Fhe.decrypt(invoices[invoiceId].isFunded), "Invoice already funded");
        
        bids[bidId].isAccepted = Fhe.asEbool(true);
        invoices[invoiceId].buyer = bids[bidId].bidder;
        invoices[invoiceId].isActive = Fhe.asEbool(false);
        
        emit BidAccepted(bidId, invoiceId, bids[bidId].bidder);
    }
    
    function fundInvoice(uint256 invoiceId) public payable {
        require(invoices[invoiceId].buyer == msg.sender, "Only buyer can fund invoice");
        require(Fhe.decrypt(invoices[invoiceId].isVerified), "Invoice must be verified");
        require(!Fhe.decrypt(invoices[invoiceId].isFunded), "Invoice already funded");
        
        uint256 amount = Fhe.decrypt(invoices[invoiceId].amount);
        require(msg.value >= amount, "Insufficient payment");
        
        invoices[invoiceId].isFunded = Fhe.asEbool(true);
        invoices[invoiceId].fundedAt = block.timestamp;
        
        // Create escrow
        uint256 escrowId = escrowCounter++;
        escrows[escrowId] = Escrow({
            escrowId: invoices[invoiceId].amount,
            amount: invoices[invoiceId].amount,
            isReleased: Fhe.asEbool(false),
            seller: invoices[invoiceId].seller,
            buyer: msg.sender,
            createdAt: block.timestamp,
            releaseDate: block.timestamp + 7 days // 7 day escrow period
        });
        
        emit InvoiceFunded(invoiceId, msg.sender, Fhe.decrypt(invoices[invoiceId].amount));
        emit EscrowCreated(escrowId, invoiceId, msg.sender);
    }
    
    function releaseEscrow(uint256 escrowId) public {
        require(escrows[escrowId].buyer == msg.sender, "Only buyer can release escrow");
        require(block.timestamp >= escrows[escrowId].releaseDate, "Escrow period not ended");
        require(!Fhe.decrypt(escrows[escrowId].isReleased), "Escrow already released");
        
        escrows[escrowId].isReleased = Fhe.asEbool(true);
        
        uint256 amount = Fhe.decrypt(escrows[escrowId].amount);
        uint256 fee = (amount * platformFee) / 10000;
        uint256 sellerAmount = amount - fee;
        
        payable(escrows[escrowId].seller).transfer(sellerAmount);
        payable(owner).transfer(fee);
        
        emit EscrowReleased(escrowId, escrows[escrowId].seller);
    }
    
    function verifyInvoice(uint256 invoiceId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify invoices");
        require(invoices[invoiceId].seller != address(0), "Invoice does not exist");
        
        invoices[invoiceId].isVerified = isVerified;
    }
    
    function updateReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, Fhe.decrypt(reputation));
    }
    
    function updateUserVolume(address user, euint32 volume) public {
        require(msg.sender == verifier, "Only verifier can update volume");
        require(user != address(0), "Invalid user address");
        
        userVolume[user] = userVolume[user] + volume;
    }
    
    function getInvoiceInfo(uint256 invoiceId) public view returns (
        uint32 amount,
        uint32 discountRate,
        uint32 dueDate,
        bool isActive,
        bool isVerified,
        bool isFunded,
        string memory description,
        address seller,
        address buyer,
        uint256 createdAt,
        uint256 fundedAt
    ) {
        Invoice storage invoice = invoices[invoiceId];
        return (
            Fhe.decrypt(invoice.amount),
            Fhe.decrypt(invoice.discountRate),
            Fhe.decrypt(invoice.dueDate),
            Fhe.decrypt(invoice.isActive),
            Fhe.decrypt(invoice.isVerified),
            Fhe.decrypt(invoice.isFunded),
            invoice.description,
            invoice.seller,
            invoice.buyer,
            invoice.createdAt,
            invoice.fundedAt
        );
    }
    
    function getBidInfo(uint256 bidId) public view returns (
        uint32 amount,
        uint32 discountRate,
        bool isAccepted,
        address bidder,
        uint256 timestamp
    ) {
        Bid storage bid = bids[bidId];
        return (
            Fhe.decrypt(bid.amount),
            Fhe.decrypt(bid.discountRate),
            Fhe.decrypt(bid.isAccepted),
            bid.bidder,
            bid.timestamp
        );
    }
    
    function getEscrowInfo(uint256 escrowId) public view returns (
        uint32 amount,
        bool isReleased,
        address seller,
        address buyer,
        uint256 createdAt,
        uint256 releaseDate
    ) {
        Escrow storage escrow = escrows[escrowId];
        return (
            Fhe.decrypt(escrow.amount),
            Fhe.decrypt(escrow.isReleased),
            escrow.seller,
            escrow.buyer,
            escrow.createdAt,
            escrow.releaseDate
        );
    }
    
    function getUserReputation(address user) public view returns (uint32) {
        return Fhe.decrypt(userReputation[user]);
    }
    
    function getUserVolume(address user) public view returns (uint32) {
        return Fhe.decrypt(userVolume[user]);
    }
    
    function setPlatformFee(uint256 _platformFee) public {
        require(msg.sender == owner, "Only owner can set platform fee");
        require(_platformFee <= 1000, "Platform fee cannot exceed 10%");
        platformFee = _platformFee;
    }
    
    function withdrawFees() public {
        require(msg.sender == owner, "Only owner can withdraw fees");
        payable(owner).transfer(address(this).balance);
    }
}
