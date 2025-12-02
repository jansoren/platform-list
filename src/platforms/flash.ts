import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "flash",
  name: "FlashTrade",
  description: "Trade Perpetuals with instant fills and on demand liquidity.",
  defiLlamaId: "flashtrade",
  links: {
    website: "https://flash.trade/",
    discord: "https://discord.com/invite/HqYDWnMP6J",
    twitter: "https://twitter.com/FlashTrade_",
    github: "https://github.com/flash-trade",
    documentation: "https://docs.flash.trade/flash-trade",
  },
  tags: ["dapp"],
};

const contract = {
  name: "FlashTrade",
  address: "FLASH6Lo6h3iasJKWDs2F8TkW2UKf3s15C8PMGuVfgBn",
};

const service: ServiceRaw = {
  id: "flash",
  name: "Earn",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
