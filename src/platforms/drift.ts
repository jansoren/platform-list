import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "drift",
  name: "Drift",
  description:
    "Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade.",
  defiLlamaId: "parent#drift",
  tags: ["dapp"],
  links: {
    website: "https://www.drift.trade/",
    discord: "https://discord.com/invite/fMcZBH8ErM",
    twitter: "https://twitter.com/DriftProtocol",
    github: "https://github.com/drift-labs",
    documentation: "https://docs.drift.trade/",
  },
  tokens: ["DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7"],
};

const contract = {
  name: "Drift",
  address: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
};

const proxyContract = {
  name: "Jit Proxy",
  address: "J1TnP8zvVxbtF5KFp5xRmWuvG9McnhzmBd9XGfCyuxFP",
};

const airdropContract = {
  name: "Airdrop",
  address: "E7HtfkEMhmn9uwL7EFNydcXBWy5WCYN1vFmKKjipEH1x",
};

const perpsService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const marketMakerService: ServiceRaw = {
  id: `${platform.id}-market-maker`,
  name: "Market Maker",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [proxyContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  perpsService,
  marketMakerService,
  airdropService,
];
export default services;
