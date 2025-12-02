import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "symmetry",
  name: "Symmetry",
  description: "Solana's on-chain asset management infrastructure layer",
  defiLlamaId: "symmetry",
  links: {
    website: "https://www.symmetry.fi/",
    discord: "http://discord.gg/ahdqBRgE7G",
    telegram: "https://t.me/symmetry_fi",
    twitter: "https://twitter.com/symmetry_fi",
    github: "https://github.com/symmetry-protocol",
    medium: "https://symmetry-fi.medium.com/",
    documentation: "https://docs.symmetry.fi/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Symmetry",
  address: "2KehYt3KsEQR53jYcxjbQp2d2kCp4AkuQW68atufRwSr",
};

const service: ServiceRaw = {
  id: "symmetry",
  name: "Symmetry",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
