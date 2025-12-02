import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "bio",
  name: "Bio",
  description:
    "The Bio protocol is DeSci’s new financial layer, engineered to commercialize the best science, faster.",
  tags: ["desci", "dapp"],
  links: {
    website: "https://www.bio.xyz/",
    discord: "https://discord.gg/bioxyz",
    twitter: "https://x.com/bioprotocol",
    documentation: "https://docs.bio.xyz/bio",
    telegram: "http://t.me/bio_protocol",
  },
  tokens: ["bioJ9JTqW62MLz7UKHU69gtKhPpGi1BQhccj2kmSvUJ"],
};

const contract = {
  name: "Fundraising",
  address: "6M3fyRE18t6c7f9qes3eQMzR4QyPRMFZiyNQcApENCYf",
};

const daoContract = {
  name: "Curating",
  address: "bioLd9krF2GytS6F7fw5bo8aUJzfbB15EWHtJAZQnAC",
};

const service: ServiceRaw = {
  id: `${platform.id}-fundraising`,
  name: "Fundraising",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const serviceDao: ServiceRaw = {
  id: `${platform.id}-Curatiing`,
  name: "Curatiing",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [daoContract],
};

export const services: ServiceRaw[] = [service, serviceDao];
export default services;
