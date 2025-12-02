import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "quarry",
  name: "Quarry",
  defiLlamaId: "quarry",
  isDeprecated: true,
  links: {
    website: "https://app.quarry.so/",
    github: "https://github.com/QuarryProtocol",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Mine",
  address: "QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB",
};

const mergeContract = {
  name: "Merge Mine",
  address: "QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto",
};

const minerService: ServiceRaw = {
  id: `${platform.id}-miner`,
  name: "Miner",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const mergeMinerService: ServiceRaw = {
  id: `${platform.id}-merge-miner`,
  name: "Merge Miner",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [mergeContract],
};

export const services: ServiceRaw[] = [minerService, mergeMinerService];
export default services;
