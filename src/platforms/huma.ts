import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "huma",
  name: "Huma",
  description:
    "Huma accelerates global payments with instant access to liquidity anywhere, anytime.",
  tags: ["dapp"],
  links: {
    website: "https://huma.finance/",
    twitter: "https://twitter.com/humafinance",
    discord: "https://discord.gg/29zVxZ6kCN",
    github: "https://github.com/00labs",
    documentation: "https://huma-finance.gitbook.io/huma-2.0",
  },
  tokens: [
    "59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw",
    "HUPfpnsaJtJGpJxAPNX1vXah7BgYiQYt1c2JMgMumvPs",
  ],
};

const contract = {
  name: "Permissionless",
  address: "HumaXepHnjaRCpjYTokxY4UtaJcmx41prQ8cxGmFC5fn",
};

const institutionalContract = {
  name: "Institutional",
  address: "EVQ4s1b6N1vmWFDv8PRNc77kufBP8HcrSNWXQAhRsJq9",
};

const airdropContract = {
  name: "Airdrop",
  address: "Distcc8stwHiwnxxj5BWkP9Re7MWRhH3JqRaRxfQC6Zr",
};

const stakingContract = {
  name: "Staking",
  address: "vsRJM68m7i18PwzTFphgPYXTujCgxEi28knpUwSmg3q",
};

const service: ServiceRaw = {
  id: `${platform.id}-permissionless`,
  name: "Permissionless",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const institutionalService: ServiceRaw = {
  id: `${platform.id}-institutional`,
  name: "Institutional",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [institutionalContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [
  service,
  institutionalService,
  airdropService,
  stakingService,
];
export default services;
