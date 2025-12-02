import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "ensofi",
  name: "EnsoFi",
  description:
    "Cross-chain DeFi Hub. Lend, Borrow, LSTs, Earn & more with stable returns.",
  links: {
    website: "https://app.ensofi.xyz",
    discord: "https://discord.com/invite/ensofi",
    telegram: "https://t.me/ensofiapp_bot/ensofi?startapp=mainnet",
    twitter: "https://twitter.com/Ensofi_xyz",
    github: "https://github.com/Ensofi-xyz",
    documentation: "https://ensofi.gitbook.io/ensofi",
  },
  tags: ["dapp"],
};

const lendingContract = {
  name: "Lending Fixed Terms",
  address: "ensoQXKf4MvNuEC3M9xmcqUqgucFNd5UzAonDdUtgqn",
};

const lendingFlexContract = {
  name: "Lending Flexible Terms",
  address: "enseM1J4dGgwEw3qDyuVBi7YsjgwqvKzuX3ZLaboLGv",
};

const liquidityContract = {
  name: "Liquidity",
  address: "ensSuXMeaUhRC7Re3ukaxLcX2E4qmd2LZxbxsK9XcWz",
};

const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lendingContract],
};

const lendingFlexService: ServiceRaw = {
  id: `${platform.id}-lending-flex`,
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lendingFlexContract],
};

const liquidityService: ServiceRaw = {
  id: `${platform.id}-liquidity`,
  name: "Liquidity",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [liquidityContract],
};

export const services: ServiceRaw[] = [
  lendingService,
  lendingFlexService,
  liquidityService,
];
export default services;
