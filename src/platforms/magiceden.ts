import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "magiceden",
  name: "MagicEden",
  description: "The NFT Marketplace.",
  links: {
    website: "https://magiceden.io/solana",
    discord: "https://discord.gg/magiceden",
    twitter: "https://twitter.com/MagicEden",
    github: "https://github.com/magiceden",
    documentation: "https://community.magiceden.io/learn",
  },
  tokens: ["MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u"],
  tags: ["tool", "nft-marketplace", "dapp"],
};

const ammContract = {
  name: "AMM",
  address: "mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc",
};

const airdropContract = {
  name: "Magic Claim",
  address: "mcmexbLZHASMjxjARNvDhXnEQT8vMP4uWnBi1Et8RdX",
};

const distributionContract = {
  name: "Magic Claim Distribution",
  address: "disGCfSiJKFigEphfou4PGHn1rukMfbs9cg9GpTM6oe",
};

const escrowContract = {
  name: "MarketPlace",
  address: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
};

const cnftContract = {
  name: "CNFT",
  address: "M3mxk5W2tt27WGT7THox7PmgRDp4m6NEhL5xvxrBfS1",
};

const stakingContract = {
  name: "Staking",
  address: "veTbq5fF2HWYpgmkwjGKTYLVpY6miWYYmakML7R7LRf",
};

const auctionContract = {
  name: "Auction",
  address: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
};

const candyMachineContract = {
  name: "Candy Machine",
  address: "CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb",
};

const escrowService: ServiceRaw = {
  id: `${platform.id}-marketPlace`,
  name: "MarketPlace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [escrowContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const auctionService: ServiceRaw = {
  id: `${platform.id}-auction`,
  name: "Auction",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [auctionContract],
};

const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "cNFT",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [cnftContract],
};

const launchpadService: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [candyMachineContract],
};

const ammService: ServiceRaw = {
  id: `${platform.id}-amm`,
  name: "AMM",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [ammContract],
};

export const services: ServiceRaw[] = [
  escrowService,
  stakingService,
  auctionService,
  cnftService,
  launchpadService,
  ammService,
];
export default services;
