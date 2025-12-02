import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solstice",
  name: "Solstice",
  tags: ["dapp", "stablecoin"],
  links: {
    website: "https://solstice.finance/",
    twitter: "https://x.com/solsticefi",
    documentation: "https://docs.solstice.finance/",
  },
  tokens: [
    "6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG",
    "3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC",
  ],
};

export const contract = {
  name: "Yield Vault",
  address: "eUSXyKoZ6aGejYVbnp3wtWQ1E8zuokLAJPecPxxtgG3",
};

export const usxJustEarnContract = {
  name: "USX Just Earn",
  address: "JECcmzAWytxXQtMN3taGmAYhTK4CDEfwEGrzfMvVeGXm",
};

export const usxContract = {
  name: "USX",
  address: "USXyiSTsPEWz55pSK7sZoUL79ntoVGQbaTDT57tH6bx",
};

const yieldVaultService: ServiceRaw = {
  id: `${platform.id}-yield-vault`,
  name: "Yield Vault",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const usxJustEarnService: ServiceRaw = {
  id: `${platform.id}-usx-just-earn`,
  name: "USX Just Earn",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [usxJustEarnContract],
};

const usxService: ServiceRaw = {
  id: `${platform.id}-usx`,
  name: "Lock",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [usxContract],
};

export const services: ServiceRaw[] = [
  yieldVaultService,
  usxJustEarnService,
  usxService,
];
export default services;
