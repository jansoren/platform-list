import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "smb",
  name: "Solana Monkey Business",
  links: {
    twitter: "https://x.com/MonkeDAO",
    website: "https://monkedao.io/",
    discord: "https://discord.gg/monkedao",
  },
  tags: ["nft-collection"],
};

const marketplaceContract = {
  name: "Marketplace",
  address: "J7RagMKwSD5zJSbRQZU56ypHUtux8LRDkUpAPSKH4WPp",
};

const service: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [marketplaceContract],
};

export const services: ServiceRaw[] = [service];
export default services;
