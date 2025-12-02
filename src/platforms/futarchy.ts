import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "futarchy",
  name: "MetaDAO",
  description:
    "MetaDAO is a DAO that uses prediction markets to make decisions.",
  links: {
    website: "https://metadao.fi/",
    discord: "https://discord.com/invite/metadao",
    twitter: "https://x.com/MetaDAOProject",
    github: "https://github.com/metaDAOproject",
    documentation: "https://docs.metadao.fi/",
  },
  tokens: ["METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"],
  tags: ["dapp", "dao"],
};

const contract = {
  name: "Futarchy DAO",
  address: "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg",
};

const launchpadContract = {
  name: "Launchpad",
  address: "AfJJJ5UqxhBKoE3grkKAZZsoXDE9kncbMKvqSHGsCNrE",
};

const conditionalContract = {
  name: "Conditional Vault",
  address: "VLTX1ishMBbcX3rdBWGssxawAo1Q2X2qxYFYqiGodVg",
};

const ammContract = {
  name: "AMM",
  address: "AMMyu265tkBpRW21iGQxKGLaves3gKm2JcMUqfXNSpqD",
};

const launchpadService: ServiceRaw = {
  id: "futarchy-launchpad",
  name: "Launchpad",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [launchpadContract],
};

export const services: ServiceRaw[] = [launchpadService];
export default services;
