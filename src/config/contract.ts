// Contract ABI and configuration
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000";

export const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"},
      {"internalType": "uint256", "name": "_platformFee", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "seller", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "description", "type": "string"}
    ],
    "name": "InvoiceCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "bidId", "type": "uint256"},
      {"indexed": true, "internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "bidder", "type": "address"},
      {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"}
    ],
    "name": "BidPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "bidId", "type": "uint256"},
      {"indexed": true, "internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "bidder", "type": "address"}
    ],
    "name": "BidAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "buyer", "type": "address"},
      {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"}
    ],
    "name": "InvoiceFunded",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "uint32", "name": "_amount", "type": "uint32"},
      {"internalType": "uint32", "name": "_discountRate", "type": "uint32"},
      {"internalType": "uint32", "name": "_dueDate", "type": "uint32"}
    ],
    "name": "createInvoice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"internalType": "uint32", "name": "encryptedAmount", "type": "uint32"}
    ],
    "name": "fundInvoice",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "uint32", "name": "discountRate", "type": "uint32"}
    ],
    "name": "placeBid",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"internalType": "uint256", "name": "bidId", "type": "uint256"}
    ],
    "name": "acceptBid",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "invoiceId", "type": "uint256"}],
    "name": "fundInvoice",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "escrowId", "type": "uint256"}],
    "name": "releaseEscrow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "invoiceId", "type": "uint256"}
    ],
    "name": "getInvoiceInfo",
    "outputs": [
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "uint32", "name": "discountRate", "type": "uint32"},
      {"internalType": "uint32", "name": "dueDate", "type": "uint32"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"},
      {"internalType": "bool", "name": "isFunded", "type": "bool"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "address", "name": "seller", "type": "address"},
      {"internalType": "address", "name": "buyer", "type": "address"},
      {"internalType": "uint256", "name": "createdAt", "type": "uint256"},
      {"internalType": "uint256", "name": "fundedAt", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
