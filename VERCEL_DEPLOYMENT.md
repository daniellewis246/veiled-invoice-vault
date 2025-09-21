# Vercel Deployment Guide for Veiled Invoice Vault

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. GitHub repository: https://github.com/daniellewis246/veiled-invoice-vault
3. Environment variables ready

## Step-by-Step Deployment Instructions

### Step 1: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository: `daniellewis246/veiled-invoice-vault`
4. Click "Import" to proceed

### Step 2: Configure Project Settings

1. **Framework Preset**: Select "Vite"
2. **Root Directory**: Leave as default (./)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the Vercel dashboard, go to your project settings and add these environment variables:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_sepolia_rpc_url
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

**To add environment variables:**
1. Go to your project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add each variable with the values above
5. Make sure to set them for "Production", "Preview", and "Development"

### Step 4: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete
3. Your app will be available at the provided Vercel URL

### Step 5: Custom Domain (Optional)

1. Go to your project settings
2. Click on "Domains" tab
3. Add your custom domain
4. Follow the DNS configuration instructions

## Post-Deployment Configuration

### Smart Contract Deployment

1. **Deploy to Sepolia Testnet:**
   ```bash
   npm run compile
   npm run deploy
   ```

2. **Update Contract Address:**
   - Copy the deployed contract address
   - Add `NEXT_PUBLIC_CONTRACT_ADDRESS` to your Vercel environment variables
   - Redeploy the application

### Environment Variables Summary

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Ethereum Sepolia Chain ID |
| `NEXT_PUBLIC_RPC_URL` | `https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990` | Sepolia RPC URL |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `2ec9743d0d0cd7fb94dee1a7e6d33475` | WalletConnect Project ID |
| `NEXT_PUBLIC_INFURA_API_KEY` | `b18fb7e6ca7045ac83c41157ab93f990` | Infura API Key |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | `[Deployed Contract Address]` | Smart Contract Address |

## Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check that all dependencies are in package.json
   - Ensure TypeScript compilation passes
   - Verify environment variables are set correctly

2. **Wallet Connection Issues:**
   - Verify WalletConnect Project ID is correct
   - Check that RPC URLs are accessible
   - Ensure contract address is set after deployment

3. **Contract Interaction Issues:**
   - Verify contract is deployed to Sepolia
   - Check contract address is correct
   - Ensure user has Sepolia ETH for gas fees

### Build Optimization

The project is configured with:
- Vite for fast builds
- TypeScript for type safety
- Tailwind CSS for styling
- RainbowKit for wallet integration

## Monitoring

After deployment, monitor:
- Build logs in Vercel dashboard
- Application performance
- User interactions with smart contracts
- Gas usage on Sepolia testnet

## Updates and Maintenance

1. **Code Updates:**
   - Push changes to main branch
   - Vercel will automatically redeploy

2. **Environment Variable Updates:**
   - Update in Vercel dashboard
   - Redeploy to apply changes

3. **Smart Contract Updates:**
   - Deploy new contract version
   - Update `NEXT_PUBLIC_CONTRACT_ADDRESS`
   - Redeploy frontend

## Support

For issues with:
- **Vercel Deployment**: Check Vercel documentation
- **Smart Contracts**: Review Hardhat configuration
- **Wallet Integration**: Verify RainbowKit setup
- **FHE Integration**: Check contract compilation

## Security Notes

- Never commit private keys to repository
- Use environment variables for sensitive data
- Test thoroughly on testnet before mainnet
- Verify all smart contract interactions
