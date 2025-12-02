import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "switchboard",
  name: "Switchboard",
  description:
    "Switchboard is a permissionless oracle network that seamlessly connects dapps to real-world data.",
  links: {
    website: "https://switchboard.xyz/",
    discord: "https://discord.gg/switchboardxyz",
    telegram: "https://t.me/switchboardxyz",
    twitter: "https://x.com/switchboardxyz",
    github: "https://github.com/switchboard-xyz",
    medium: "https://switchboardxyz.medium.com/",
    documentation: "https://docs.switchboard.xyz/",
  },
  tags: ["tool"],
  tokens: ["SW1TCHLmRGTfW5xZknqQdpdarB8PD95sJYWpNp9TbFx"],
};

const contract = {
  name: "On Demand",
  address: "SBondMDrcV3K4kxZR1HNVT7osZxAHVHgYXL5Ze1oMUv",
};

const service: ServiceRaw = {
  id: `${platform.id}-on-demand`,
  name: "On Demand",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
