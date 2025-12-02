import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "banana-gun",
  name: "Banana Gun",
  links: {
    website: "http://bananagun.io/",
    twitter: "https://x.com/BananaGunBot",
    documentation: "https://docs.bananagun.io/",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "BANANAjs7FJiPQqJTGFzkZJndT9o7UmKiYYGaJz6frGu",
};

const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
