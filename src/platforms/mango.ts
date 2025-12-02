import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "mango",
  name: "Mango",
  description: "Perps and spot trading on Solana",
  defiLlamaId: "parent#mango-markets",
  isDeprecated: true,
  links: {
    website: "https://mango.markets/",
    discord: "https://discord.com/invite/pcSkP3yJMU",
    twitter: "https://twitter.com/mangomarkets",
    github: "https://discord.gg/pcSkP3yJMUs",
  },
  tokens: ["MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac"],
  tags: ["dapp"],
};

const marketsContract = {
  name: "Markets",
  address: "4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg",
};

const redeemContract = {
  name: "Redeem",
  address: "mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68",
};

const boostContract = {
  name: "Boost",
  address: "zF2vSz6V9g1YHGmfrzsY497NJzbRr84QUrPry4bLQ25",
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets V4",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [marketsContract],
};

const redeemService: ServiceRaw = {
  id: `${platform.id}-redeem`,
  name: "Markets & Redeem V3",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [redeemContract],
};

const boostService: ServiceRaw = {
  id: `${platform.id}-boost`,
  name: "Boost",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [boostContract],
};

export const services: ServiceRaw[] = [
  airdropService,
  redeemService,
  boostService,
];
export default services;
