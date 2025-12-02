import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "sanctum",
  name: "Sanctum",
  description:
    "Sanctum is a new primitive built on Solana to power liquid staking and bring Solana into an infinite-LST future. Sanctum enables users that stake SOL natively or with a liquid staking token (LST) to tap into a powerful unified liquidity layer.",
  defiLlamaId: "parent#sanctum",
  tags: ["lst", "dapp"],
  links: {
    website: "https://www.sanctum.so/",
    discord: "https://discord.gg/sanctumso",
    twitter: "https://twitter.com/sanctumso",
    github: "https://github.com/igneous-labs",
    documentation: "https://learn.sanctum.so/docs",
  },
  tokens: ["CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu"],
};

const poolContract = {
  name: "Infinity Pool",
  address: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
};

const infContract = {
  name: "Infinity",
  address: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
};

const voteContract = {
  name: "Vote",
  address: "VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp",
};

const stakingContract = {
  name: "Staking",
  address: "bon4Kh3x1uQK16w9b9DKgz3Aw4AP1pZxBJk55Q6Sosb",
};

const routerContract = {
  name: "Router",
  address: "stkitrT1Uoy18Dk1fTrgPw8W6MVzoCfYoAFT4MLsmhq",
};

const asrContract = {
  name: "ASR",
  address: "9R2CZDyVjBBK2bxx6NfKdnYMYfh8TQEphUUgZ4861XqJ",
};

const voteService: ServiceRaw = {
  id: `${platform.id}-vote`,
  name: "Vote",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [voteContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const poolService: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Infinity Pool",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [poolContract],
};

const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "Router",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [routerContract],
};

const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [infContract],
};

const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [asrContract],
};

export const services: ServiceRaw[] = [
  voteService,
  stakingService,
  poolService,
  routerService,
  tradeService,
  asrService,
];
export default services;
