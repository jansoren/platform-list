import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "privacycash",
  name: "Privacy Cash",
  description: "Transfer SOL privately",
  links: {
    website: "https://www.privacycash.org/",
    discord: "https://discord.gg/8guY9uXBvA",
    twitter: "https://x.com/theprivacycash",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Send",
  address: "9fhQBbumKEFuXtMBDw8AaQyAjCorLGJQiS3skWZdQyQD",
};

const service: ServiceRaw = {
  id: `${platform.id}-send`,
  name: "Send",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
