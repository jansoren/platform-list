import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "armada",
  name: "Armada",
  description:
    "No code token staking setup on solana. Professionally managed and non custodial token liquidity strategies.",
  defiLlamaId: "armada-staking",
  tags: ["dapp"],
  isDeprecated: true,
  links: {
    website: "https://armada-alliance.com/",
    twitter: "https://x.com/armadafi",
    github: "https://github.com/mithraiclabs",
  },
};

const contract = {
  name: "Staking",
  address: "STAKEGztX7S1MUHxcQHieZhELCntb9Ys9BgUbeEtMu1",
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Permissionless Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
