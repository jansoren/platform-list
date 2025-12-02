import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solsea",
  name: "Solsea",
  isDeprecated: true,
  links: {
    website: "https://solsea.io/",
    twitter: "https://twitter.com/SolSeaNFT",
  },
  tags: ["nft-marketplace"],
};

export const contract = {
  name: "Marketplace",
  address: "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU",
};

const metaplexContract = {
  name: "Metaplex",
  address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
};

const solanaStakingService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract, metaplexContract],
};

export const services: ServiceRaw[] = [solanaStakingService];
export default services;
