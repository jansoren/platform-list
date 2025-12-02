import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "madlads",
  name: "MadLads",
  links: {
    website: "https://www.madlads.com/",
    twitter: "https://x.com/MadLads",
    discord: "https://discord.gg/madlads",
  },
  tags: ["nft-collection"],
};

import { vestingContract } from "./streamflow";

const solboundContract = {
  name: "SolBound",
  address: "7DkjPwuKxvz6Viiawtbmb4CqnMKP6eGb1WqYas1airUS",
};

const service: ServiceRaw = {
  id: `${platform.id}-launch`,
  name: "W Claim",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [solboundContract, vestingContract],
};

export const services: ServiceRaw[] = [service];
export default services;
