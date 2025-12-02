import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "debridge",
  name: "deBridge",
  description:
    "Cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains.",
  defiLlamaId: "debridge",
  links: {
    website: "https://debridge.finance/",
    discord: "https://discord.gg/debridge",
    telegram: "https://t.me/deBridge_finance",
    twitter: "https://x.com/deBridgeFinance",
    github: "https://github.com/debridge-finance/",
    documentation: "https://docs.debridge.finance/",
  },
  tokens: ["DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5"],
  tags: ["tool", "bridge", "dapp"],
};

const transferContract = {
  name: "DeBridge",
  address: "DEbrdGj3HsRsAzx6uH4MKyREKxVAfBydijLUF3ygsFfh",
};

const aidropContract = {
  name: "Airdrop",
  address: "DBrLFG4dco1xNC5Aarbt3KEaKaJ5rBYHwysqZoeqsSFE",
};

const vaultContract = {
  name: "Vault",
  address: "DeDRoPXNyHRJSagxZBBqs4hLAAM1bGKgxh7cyfuNCBpo",
};

const sourceContract = {
  name: "Bridge",
  address: "src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4",
};

const destContract = {
  name: "Bridge",
  address: "dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo",
};

const transferService: ServiceRaw = {
  id: `${platform.id}-transfer`,
  name: "Transfer",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [transferContract],
};

const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Vault",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [vaultContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [aidropContract],
};

export const services: ServiceRaw[] = [
  transferService,
  vaultService,
  airdropService,
];
export default services;
