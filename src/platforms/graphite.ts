import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "graphite",
  name: "Graphite Protocol",
  links: {
    website: "https://gpstaking.taiyorobotics.com/",
    twitter: "https://x.com/GraphiteProto",
    documentation: "https://solport.gitbook.io/graphite-whitepaper",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "7pXE4B9EgsEixnyW6U16dEHXKqaaU3mj63cCMqrPRy1C",
};

const nftGen1StakingContract = {
  name: "Taiyo Gen1 Staking",
  address: "J1gmrCGd1zkmjYpsCRkFCsQQEZohRQLVXN4dVxKvDu1e",
};

const nftGen2StakingContract = {
  name: "Taiyo Gen2 Staking",
  address: "5f7ZLHmrtjpiCjM2vhSfbewUyDPZcf8x2RDRYJnyMXxg",
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const nftGen1service: ServiceRaw = {
  id: `${platform.id}-gen1-staking`,
  name: "Taiyo Gen1 Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [nftGen1StakingContract],
};

const nftGen2service: ServiceRaw = {
  id: `${platform.id}-gen2-staking`,
  name: "Taiyo Gen2 Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [nftGen2StakingContract],
};

export const services: ServiceRaw[] = [service, nftGen1service, nftGen2service];
export default services;
