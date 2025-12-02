import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "solana",
  name: "Solana",
  description:
    "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  links: {
    website: "https://solana.com/",
    discord: "https://solana.com/discord",
    telegram: "https://solana.com/telegram",
    twitter: "https://solana.com/twitter",
    github: "https://solana.com/github",
    documentation: "https://solana.com/docs",
  },
  tags: ["dapp"],
};

const solanaStakingContract = {
  name: "Staking",
  address: "Stake11111111111111111111111111111111111111",
};

const solanaStakePoolContract = {
  name: "Stake Pool",
  address: "SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy",
};

const singleValidatorStakePoolContract = {
  name: "Single Validator Stake Pool",
  address: "SVSPxpvHdN29nkVg9rPapPNDddN5DipNLRUFhyjFThE",
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [solanaStakingContract],
};

const stakePoolService: ServiceRaw = {
  id: `${platform.id}-stake-pool`,
  name: "Stake Pool",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [solanaStakePoolContract],
};

const singleValidatorStakePoolService: ServiceRaw = {
  id: `${platform.id}-single-validator-stake-pool`,
  name: "Single-Validator Stake Pool",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [singleValidatorStakePoolContract],
};

export {
  solanaStakingContract,
  solanaStakePoolContract,
  singleValidatorStakePoolContract,
};

export const services: ServiceRaw[] = [
  stakingService,
  stakePoolService,
  singleValidatorStakePoolService,
];
export default services;
