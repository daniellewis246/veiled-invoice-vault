# Veiled Invoice Vault

A revolutionary FHE-powered confidential invoice trading platform built on blockchain technology.

## Overview

Veiled Invoice Vault is a cutting-edge decentralized application that enables confidential trading of invoices using Fully Homomorphic Encryption (FHE). The platform ensures complete privacy while maintaining transparency and security through blockchain technology.

## Features

- **FHE-Powered Privacy**: All sensitive invoice data is encrypted using Fully Homomorphic Encryption
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit
- **Confidential Trading**: Trade invoices without revealing sensitive financial information
- **Smart Contract Integration**: Secure and transparent transactions on the blockchain
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Technologies

This project is built with:

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Web3**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/daniellewis246/veiled-invoice-vault.git
cd veiled-invoice-vault
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Environment Configuration

Create a `.env` file with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run preview
```

## Smart Contracts

The platform includes FHE-enabled smart contracts for:
- Invoice creation and management
- Confidential bidding system
- Secure fund escrow
- Privacy-preserving transactions

## Security

- All sensitive data is encrypted using FHE
- Smart contracts are audited and secure
- Wallet integration follows best practices
- Privacy-first architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
