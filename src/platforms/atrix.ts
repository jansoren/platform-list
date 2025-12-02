import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "atrix",
  name: "Atrix",
  defiLlamaId: "atrix",
  tags: ["dapp"],
  links: {
    website: "https://app.atrix.finance/liquidity",
    discord: "https://discord.com/invite/nfyqSEzUsp",
    twitter: "https://x.com/atrixprotocol",
  },
  description:
    "A Serum-based AMM on Solana allowing for permissionless liquidity and farming.",
  isDeprecated: true,
};

const farmContract = {
  name: "Staking",
  address: "BLDDrex4ZSWBgPYaaH6CQCzkJXWfzCiiur9cSFJT8t3x",
};

const poolContract = {
  name: "Staking",
  address: "HvwYjjzPbXWpykgVZhqvvfeeaSraQVnTiQibofaFw9M7",
};

const farmService: ServiceRaw = {
  id: `${platform.id}-farm`,
  name: "Farms",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [farmContract],
};

const poolService: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Pools",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [poolContract],
};

export const services: ServiceRaw[] = [farmService, poolService];
export default services;
