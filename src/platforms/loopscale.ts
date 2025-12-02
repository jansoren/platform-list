import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "loopscale",
  name: "Loopscale",
  description:
    "Loopscale is a new way to lend and borrow onchain with the best rates, any asset, and less risk.",
  links: {
    website: "https://app.loopscale.com/",
    discord: "https://discord.gg/loopscale",
    twitter: "https://x.com/LoopscaleLabs",
    github: "https://github.com/bridgesplit",
    documentation: "https://docs.loopscale.com/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Loopscale",
  address: "1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78",
};

const creditBookContract = {
  name: "CreditBook",
  address: "abfcSQac2vK2Pa6UAJb37DzarVxF15bDTdphJzAqYYp",
};

const service: ServiceRaw = {
  id: "loopscale",
  name: "Loopscale",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const creditBookService: ServiceRaw = {
  id: "loopscale-creditbook",
  name: "CreditBook",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [creditBookContract],
};

export const services: ServiceRaw[] = [service, creditBookService];
export default services;
