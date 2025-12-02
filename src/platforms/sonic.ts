import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "sonic",
  name: "Sonic",
  description:
    "Sonic is the first atomic SVM chain designed to enable sovereign game economies on Solana. By utilizing the HyperGrid framework, Sonic offers unparalleled speed and scalability for on-chain gaming experiences.",
  links: {
    website: "https://www.sonic.game/",
    discord: "https://discord.com/invite/joinmirrorworld",
    twitter: "https://x.com/SonicSVM",
    github: "https://github.com/mirrorworld-universe",
    documentation: "https://docs.sonic.game/",
  },
  tokens: [
    "SonicxvLud67EceaEzCLRnMTBqzYUUYNr93DBkBdDES",
    "sonickAJFiVLcYXx25X9vpF293udaWqDMUCiGtk7dg2",
  ],
  tags: ["gaming"],
};

const contract = {
  name: "Staking",
  address: "g3yMgSB3Q7gNjMfSoCm1PiJihqHdNJeUuPHvRyf45qY",
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
