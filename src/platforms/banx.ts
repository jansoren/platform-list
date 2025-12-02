import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "banx",
  name: "Banx",
  description:
    "Borrow, Lend, Multiply, Hedge Solana tokens and NFTs with no expiration, no price liquidation.",
  defiLlamaId: "banx",
  tags: ["dapp"],
  links: {
    website: "https://banx.gg/",
    discord: "https://discord.com/invite/banxfromfrakt",
    twitter: "https://twitter.com/banx_gg",
    github: "https://github.com/frakt-solana",
    documentation: "https://docs.banx.gg/",
  },
  tokens: ["BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR"],
};

const banxContract = {
  name: "Banx Bonds",
  address: "4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt",
};

const banxVaultsContract = {
  name: "Vaults",
  address: "BanxxEcFZPJLKhS59EkwTa8SZez8vDYTiJVN78mGHWDi",
};

const airdropContract = {
  name: "Airdrop",
  address: "BanxBXWfsNL1Fg2dwJV6ZJ5qBieYn9pHqb5PAVrwPigN",
};

const bondsService: ServiceRaw = {
  id: "banx-bonds",
  name: "Bonds",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [banxContract],
};

const vaultsService: ServiceRaw = {
  id: "banx-vaults",
  name: "Vaults",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [banxVaultsContract, banxContract],
};

const airdropService: ServiceRaw = {
  id: "banx-airdrop",
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  bondsService,
  vaultsService,
  airdropService,
];
export default services;
