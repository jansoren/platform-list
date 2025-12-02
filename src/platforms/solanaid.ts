import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solanaid",
  name: "Solana ID",
  links: {
    website: "https://app.solana.id/",
    twitter: "https://x.com/solanaidentity",
    discord: "https://discord.com/invite/solanaid",
    telegram: "https://t.me/+NKjmb1u7LZw5YTU6",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Staking",
  address: "gp8fqiE5cwX3JRT8unpKeFutNdMihyisAe3nx6L3S1p",
};

const service: ServiceRaw = {
  id: "solanaid",
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
