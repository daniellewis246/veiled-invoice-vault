import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy VeiledInvoiceVault
  const VeiledInvoiceVault = await ethers.getContractFactory("VeiledInvoiceVault");
  const verifier = deployer.address; // Use deployer as verifier for now
  const platformFee = 250; // 2.5% platform fee
  
  const vault = await VeiledInvoiceVault.deploy(verifier, platformFee);
  await vault.deployed();

  console.log("VeiledInvoiceVault deployed to:", vault.address);
  console.log("Verifier address:", verifier);
  console.log("Platform fee:", platformFee, "basis points");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
