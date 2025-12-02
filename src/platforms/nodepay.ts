import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "nodepay",
  name: "Nodepay",
  tags: ["tool"],
  links: {
    website: "https://nodepay.ai/",
    discord: "https://discord.com/invite/nodepay",
    twitter: "https://x.com/nodepay_ai",
    telegram: "https://t.me/nodepaycommunitychat",
  },
};

const stakingContract = {
  name: "Staking",
  address: "stakevLBn36MxF5qcjXFxChfFDhL9LrLqj4WC3HPpGT",
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [service];
export default services;
