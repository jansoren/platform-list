import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hastra",
  name: "Hastra",
  description:
    "Hastra is a DeFi protocol offering vault-based staking and minting services.",
  tags: ["dapp"],
  links: {
    website: "https://www.hastra.io/",
    twitter: "https://x.com/HastraFi",
  },
  addedAt: 1764936000000,
};

const mintContract = {
  name: "Vault Mint",
  address: "9WUyNREiPDMgwMh5Gt81Fd3JpiCKxpjZ5Dpq9Bo1RhMV",
  networkId: NetworkId.solana,
};

const stakeContract = {
  name: "Vault Stake",
  address: "97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY",
  networkId: NetworkId.solana,
};

export const mintService: ServiceRaw = {
  id: `${platform.id}-mint`,
  name: "Mint",
  platformId: platform.id,
  contractsRaw: [mintContract],
  link: "https://www.hastra.io/",
  description:
    "Minting service for PRIME liquid staking tokens backed by Figure's RWA loan originations via Chainlink oracle infrastructure.",
};

export const stakeService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [stakeContract],
  description:
    "Staking vault enabling users to amplify yield earnings while maintaining asset liquidity through the PRIME token system.",
};

export const services: ServiceRaw[] = [mintService, stakeService];
