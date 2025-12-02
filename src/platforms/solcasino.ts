import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solcasino",
  name: "Solcasino",
  links: {
    website: "https://solcasino.io/",
    twitter: "https://x.com/Solcasinoio",
    discord: "https://discord.gg/solcasinoio",
    telegram: "https://t.me/SolcasinoIOBot",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Solcasino",
  address: "CQ36xjMHgmgwEM1yvJYUWg3YxMvzwM4Mntn6vZrMk86z",
};

const depositService: ServiceRaw = {
  id: `${platform.id}-deposit`,
  name: "Deposit",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [depositService];
export default services;
