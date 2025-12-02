import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "bloom",
  name: "Bloom",
  links: {
    website: "https://www.bloombot.app/",
    discord: "https://discord.gg/bloomtrading",
    twitter: "https://x.com/BloomTradingBot",
    documentation: "https://docs.bloombot.app/",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "b1oomGGqPKGD6errbyfbVMBuzSC8WtAAYo8MwNafWW1",
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
