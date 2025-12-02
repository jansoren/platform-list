import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "sendit",
  name: "Sendit",
  description: "Permissionless Meme Market",
  links: {
    website: "https://sendit.fun/",
    twitter: "https://x.com/senditfun",
    discord: "https://discord.com/invite/senditfun",
    documentation: "https://docs.sendit.fun/",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const earnContract = {
  name: "SOL Earn",
  address: "SenditVXUyY6zjSPYucQTff9rfUkAWnxoijY87FJwGV",
};

const tradeContract = {
  name: "Trade",
  address: "SenditXmUCHPeV6iyFoMY8dRNB4PofGKTfp52hEWpJx",
};

const lendContract = {
  name: "Memecoin Yielding",
  address: "Senditho8dTeu9BpXBFfN3b479NyXEbJ26ynw9pPJNY",
};

const earnService: ServiceRaw = {
  id: `${platform.id}-sol-earn`,
  name: "Sol Earn",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [earnContract],
};

const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [tradeContract],
};

const lendService: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Memecoin Yielding",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lendContract],
};

export const services: ServiceRaw[] = [earnService, tradeService, lendService];
export default services;
