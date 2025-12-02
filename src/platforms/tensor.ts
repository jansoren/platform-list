import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "tensor",
  name: "Tensor",
  description: "Solana's Leading NFT Marketplace",
  tags: ["tool", "nft-marketplace", "dapp"],
  links: {
    website: "https://www.tensor.trade/",
    discord: "https://discord.gg/tensor",
    twitter: "https://twitter.com/tensor_hq",
    github: "https://github.com/tensor-hq",
    documentation: "https://docs.tensor.trade/",
  },
  tokens: ["TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6"],
};

const cnftContract = {
  name: "cNFT",
  address: "TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp",
};

const contract = {
  name: "Swap",
  address: "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN",
};

const bidContract = {
  name: "Bid",
  address: "TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv",
};

const airdropContract = {
  name: "Magma",
  address: "3zK38YBP6u3BpLUpaa6QhRHh4VXdv3J8cmD24fFpuyqy",
};

const ammContract = {
  name: "AMM",
  address: "TAMM6ub33ij1mbetoMyVBLeKY5iP41i4UPUJQGkhfsg",
};

const luckyBuyContract = {
  name: "Lucky Buy",
  address: "LUCK57mxzZiRGF2PdHAY79P6tZ8Apsi381tKvBrTdqk",
};

const marketplaceService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Marketplace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "Marketplace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [cnftContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Vesting Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

const bidService: ServiceRaw = {
  id: `${platform.id}-bid`,
  name: "Bid",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bidContract],
};

const tammService: ServiceRaw = {
  id: `${platform.id}-amm`,
  name: "AMM",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [ammContract],
};

const luckyBuyService: ServiceRaw = {
  id: `${platform.id}-lucky-buy`,
  name: "Lucky Buy",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [luckyBuyContract],
};

export const services: ServiceRaw[] = [
  marketplaceService,
  cnftService,
  airdropService,
  bidService,
  tammService,
  luckyBuyService,
];
export default services;
