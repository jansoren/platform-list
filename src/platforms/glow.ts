import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "glow",
  name: "Glow",
  tags: ["dapp"],
  links: {
    website: "https://app.glowfinance.xyz/",
    twitter: "https://x.com/glowfinancexyz",
    discord: "https://discord.gg/glowfinance",
  },
};

const contract = {
  name: "Markets",
  address: "GLoWMgcn3VbyFKiC2FGMgfKxYSyTJS7uKFwKY2CSkq9X",
};

const service: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
