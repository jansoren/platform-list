import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "bonkrewards",
  name: "Bonk Rewards",
  description: "Social layer and community meme coin of Solana.",
  defiLlamaId: "bonkswap",
  tags: ["memecoin", "dapp"],
  links: {
    website: "https://bonkrewards.com/",
    discord: "https://discord.com/invite/qaQa6M6mN2",
    telegram: "https://t.me/Official_Bonk_Inu",
    twitter: "https://twitter.com/bonk_inu",
    medium: "https://medium.com/@bonk_inu",
  },
  tokens: ["DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"],
};

const contract = {
  name: "Staking",
  address: "STAKEkKzbdeKkqzKpLkNQD3SUuLgshDKCD7U8duxAbB",
};

const fireContract = {
  name: "Fire",
  address: "FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg",
};

const swapContract = {
  name: "Swap",
  address: "BSwp6bEBihVLdqJRKGgzjcGLHkcTuzmSo1TQkHepzH8p",
};

const bonkMasContract = {
  name: "BonkMas",
  address: "BMas2pUrC5GR1ZJFbJLy2UmBcEgCfdxB5QLSBrLRnvK4",
};

const daoContract = {
  name: "DAO",
  address: "HA99cuBQCCzZu1zuHN2qBxo2FBo1cxNLwKkdt6Prhy8v",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const fireService: ServiceRaw = {
  id: `${platform.id}-fire`,
  name: "Fire",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [fireContract],
};

const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [swapContract],
};

const bonkMasService: ServiceRaw = {
  id: `${platform.id}-bonkmas`,
  name: "BONKmas",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bonkMasContract],
};

const daoService: ServiceRaw = {
  id: `${platform.id}-dao`,
  name: "DAO",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [daoContract],
};

export const services: ServiceRaw[] = [
  stakingService,
  fireService,
  swapService,
  bonkMasService,
  daoService,
];
export default services;
