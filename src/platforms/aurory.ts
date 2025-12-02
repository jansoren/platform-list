import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "aurory",
  name: "Aurory",
  description:
    "Seekers of Tokane by Aurory, is a free-to-play, immersive JRPG built by a team of +60 gaming industry veterans.",
  tags: ["nft-collection", "gaming"],
  links: {
    website: "https://app.aurory.io",
    discord: "https://discord.gg/aurory",
    twitter: "https://twitter.com/AuroryProject",
    documentation: "https://docs.aurory.io/",
    github: "https://github.com/Aurory-Game",
  },
  tokens: ["AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP"],
};

const contract = {
  name: "Staking",
  address: "StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x",
};

const stakingContract = {
  name: "Staking",
  address: "STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const stakingService2: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService, stakingService2];
export default services;
