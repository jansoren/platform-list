import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "marginfi",
  name: "Marginfi",
  description:
    "A liquidity layer built for finance. Access native yield, embedded risk systems, and off-chain data plug-ins.",
  defiLlamaId: "parent#marginfi",
  links: {
    website: "https://www.marginfi.com/",
    telegram: "https://t.me/mrgnteam",
    twitter: "https://twitter.com/marginfi",
    github: "https://github.com/mrgnlabs/",
    documentation: "https://docs.marginfi.com/",
  },
  tokens: ["LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp"],
  tags: ["dapp"],
};

const contract = {
  name: "Lending",
  address: "MFv2hWf31Z9kbCa1snEPYctwafyhdvnV7FZnsebVacA",
};

const service: ServiceRaw = {
  id: "marginfi-lending",
  name: "Lending",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
