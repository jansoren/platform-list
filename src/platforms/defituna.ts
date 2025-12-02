import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "defituna",
  name: "DeFiTuna",
  description: "A comprehensive toolkit for Liquidity Providers",
  links: {
    website: "https://defituna.com",
    discord: "https://discord.gg/vNWwVWbnzs",
    twitter: "https://x.com/DeFiTuna",
    documentation: "https://defituna.gitbook.io/defituna-docs",
  },
  tags: ["dapp", "dex"],
  tokens: ["TUNAfXDZEdQizTMTh3uEvNvYqJmqFHZbEJt8joP4cyx"],
};

const defiTunaContract = {
  name: "DefiTuna",
  address: "tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD",
};

const stakingContract = {
  name: "Staking",
  address: "tUnst2Y2sbmgSgARBpSBZhqPzpoy2iUsdCwb5ToYVJa",
};

const fusionAmmContract = {
  name: "Fusion AMM",
  address: "fUSioN9YKKSa3CUC2YUc4tPkHJ5Y6XW1yz8y6F7qWz9",
};

const defiTunaService: ServiceRaw = {
  id: "defituna",
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [defiTunaContract],
};

const stakingService: ServiceRaw = {
  id: "defituna-staking",
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const fusionAmmService: ServiceRaw = {
  id: "defituna-fusion-amm",
  name: "Fusion AMM",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [fusionAmmContract],
};

export const services: ServiceRaw[] = [
  defiTunaService,
  stakingService,
  fusionAmmService,
];
export default services;
