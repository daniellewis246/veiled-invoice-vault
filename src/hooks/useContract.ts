import { useContract, useContractWrite, useContractRead } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';

export const useVeiledInvoiceVault = () => {
  const { data: contract } = useContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
  });

  return contract;
};

export const useCreateInvoice = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'createInvoice',
  });

  return { createInvoice: write, isLoading, error };
};

export const usePlaceBid = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'placeBid',
  });

  return { placeBid: write, isLoading, error };
};

export const useAcceptBid = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'acceptBid',
  });

  return { acceptBid: write, isLoading, error };
};

export const useFundInvoice = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'fundInvoice',
  });

  return { fundInvoice: write, isLoading, error };
};

export const useReleaseEscrow = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'releaseEscrow',
  });

  return { releaseEscrow: write, isLoading, error };
};

export const useGetInvoiceInfo = (invoiceId: number) => {
  const { data, isLoading, error } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getInvoiceInfo',
    args: [BigInt(invoiceId)],
  });

  return { data, isLoading, error };
};
