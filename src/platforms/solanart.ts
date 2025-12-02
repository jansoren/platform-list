import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solanart",
  name: "Solanart",
  links: {
    website: "https://solanart.io/",
    twitter: "https://x.com/SolanartNFT",
  },
  tags: ["nft-marketplace"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
};

const globalOfferContract = {
  name: "Global Offer",
  address: "5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [mainContract],
};

const globalOfferService: ServiceRaw = {
  id: `${platform.id}-global-offer`,
  name: "Global Offer",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [globalOfferContract],
};

export const services: ServiceRaw[] = [stakingService, globalOfferService];
export default services;
