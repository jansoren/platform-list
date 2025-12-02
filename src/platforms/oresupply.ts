import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "oresupply",
  name: "OreSupply",
  description: "Proof of work on Solana.",
  tags: ["tool"],
  links: {
    website: "https://ore.supply/",
    discord: "https://discord.gg/4TQfshAAsT",
    twitter: "https://x.com/oresupply",
    github: "https://github.com/regolith-labs/ore",
    documentation: "https://ore.supply/mine",
  },
  tokens: ["oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"],
};

const contract = {
  name: "Mining",
  address: "poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc",
};

const legacyStakingContract = {
  name: "V1",
  address: "BoostzzkNfCA9D1qNuN5xZxB5ErbK4zQuBeTHGDpXT1",
};

const v2Contract = {
  name: "V2",
  address: "oreV2ZymfyeXgNgBdqMkumTqqAprVqgBWQfoYkrtKWQ",
};

const v3Contract = {
  name: "V3",
  address: "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv",
};

const service: ServiceRaw = {
  id: `${platform.id}-mining`,
  name: "Mining",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const v1Service: ServiceRaw = {
  id: `${platform.id}-v1`,
  name: "V1",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [legacyStakingContract],
};

const v2Service: ServiceRaw = {
  id: `${platform.id}-v2`,
  name: "V2",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [v2Contract],
};

const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "V3",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [
  service,
  v1Service,
  v2Service,
  v3Service,
];
export default services;
