import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "pyra",
  name: "Pyra",
  description: "Credit card and DeFi protocol",
  tags: ["dapp"],
  links: {
    website: "https://www.pyra.fi/",
    discord: "https://discord.gg/GetPyra",
    telegram: "https://t.me/GetPyra",
    twitter: "https://x.com/GetPyra",
    documentation: "https://docs.pyra.fi/",
  },
};

const contract = {
  name: "Loans",
  address: "6JjHXLheGSNvvexgzMthEcgjkcirDrGduc3HAKB2P1v2",
};

const service: ServiceRaw = {
  id: `${platform.id}-loans`,
  name: "Loans",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
