
import React from 'react';
import { Bitcoin, Flame, Wallet, Layers } from 'lucide-react';

export const ASSETS_CONFIG = [
  { symbol: 'BDC', name: 'BodeCoin', color: '#10b981', icon: '/favicon (1).png' },
  { symbol: 'BTC', name: 'Bitcoin', color: '#F7931A', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
  { symbol: 'ETH', name: 'Ethereum', color: '#F97316', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
  { symbol: 'SOL', name: 'Solana', color: '#14F195', icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
];

export const INITIAL_PARAMS = {
  aporte: 1000,
  novosHolders: 1000,
  ticketMedio: 1000,
  qtdBDC: 1000,
  taxaCompra: 0.02,
  slippage: 0.05,
};
