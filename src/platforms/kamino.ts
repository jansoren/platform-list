import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "kamino",
  name: "Kamino",
  description: "Borrow, Earn and Leverage on Solana",
  defiLlamaId: "parent#kamino-finance",
  links: {
    website: "https://kamino.finance/",
    discord: "https://discord.com/invite/kaminofinance",
    twitter: "https://x.com/KaminoFinance",
    github: "https://github.com/Kamino-Finance",
    documentation: "https://docs.kamino.finance/",
  },
  tokens: ["KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS"],
  tags: ["dapp"],
};

import { jupiterV6Contract } from "./jupiter";
import { contract } from "./dflow";
import { expressRelayContract } from "./pyth";

export const kaminoLendContract = {
  name: "Kamino Lend",
  address: "KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD",
};

const poolsContract = {
  name: "Liquidity",
  address: "6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc",
};

const kaminoFarmContract = {
  name: "Kamino Farm",
  address: "FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr",
};

const limitOrderContract = {
  name: "Kamino Limit Order",
  address: "LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF",
};

const vaultContract = {
  name: "Kamino Vault",
  address: "KvauGMspG5k6rtzrqqn7WNn3oZdyKqLKwK2XWQ8FLjd",
};

const leverageOnVaultContract = {
  name: "Leverage",
  address: "CRhtqXk98ATqo1R8gLg7qcpEMuvoPzqD5GNicPPqLMD",
};

const scopePriceContract = {
  name: "Scope Price",
  address: "HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ",
};

const airdropContract = {
  name: "Airdrop",
  address: "KdisqEcXbXKaTrBFqeDLhMmBvymLTwj9GmhDcdJyGat",
};

const scopePriceService: ServiceRaw = {
  id: `${platform.id}-scope-price`,
  name: "Scope Price",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [scopePriceContract],
};

const kaminoLendingService: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [kaminoLendContract],
};

const kaminoMultiplyService: ServiceRaw = {
  id: `${platform.id}-multiply`,
  name: "Multiply",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [kaminoLendContract, jupiterV6Contract],
};

const kaminoLimitOrderService: ServiceRaw = {
  id: `${platform.id}-limit-order`,
  name: "Limit Order",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [limitOrderContract],
};

const swapService: ServiceRaw = {
  id: `${platform.id}-swap-dflow`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [limitOrderContract, contract],
};

const swapJupiterService: ServiceRaw = {
  id: `${platform.id}-swap-jupiter`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [limitOrderContract, jupiterV6Contract],
};

const swapPythService: ServiceRaw = {
  id: `${platform.id}-swap-pyth`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [limitOrderContract, expressRelayContract],
};

const kaminoLiquidityService: ServiceRaw = {
  id: `${platform.id}-liquidity`,
  name: "Liquidity",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [poolsContract, kaminoFarmContract],
};

const vaultLeverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [leverageOnVaultContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  scopePriceService,
  kaminoLendingService,
  kaminoMultiplyService,
  kaminoLimitOrderService,
  swapService,
  swapJupiterService,
  swapPythService,
  kaminoLiquidityService,
  vaultLeverageService,
  airdropService,
];
export default services;
