import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "raydium",
  name: "Raydium",
  description:
    "Raydium is an automated market maker (AMM) built on the Solana blockchain which enables lightning-fast trades, permissionless pool creation, and new features for earning yield",
  defiLlamaId: "raydium",
  links: {
    website: "https://raydium.io/",
    discord: "https://discord.com/invite/raydium",
    telegram: "https://t.me/raydiumprotocol",
    github: "https://github.com/raydium-io",
    documentation: "https://docs.raydium.io/raydium/",
    twitter: "https://x.com/Raydium"
  },
  tokens: ["4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"],
  tags: ["dapp"],
};

const ammV4Contract = {
  name: "AMM v4",
  address: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
  networkId: NetworkId.solana,
};

const ammV5Contract = {
  name: "AMM v5",
  address: "5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h",
  networkId: NetworkId.solana,
};

const ammRootingContract = {
  name: "AMM Rooting",
  address: "routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS",
  networkId: NetworkId.solana,
};

const clmmContract = {
  name: "CLMM",
  address: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK",
  networkId: NetworkId.solana,
};

const cpmmContract = {
  name: "CPMM",
  address: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C",
  networkId: NetworkId.solana,
};

const farmV3Contract = {
  name: "Farm V3",
  address: "EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q",
  networkId: NetworkId.solana,
};

const farmV4Contract = {
  name: "Farm V4",
  address: "CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T",
  networkId: NetworkId.solana,
};

const farmV5Contract = {
  name: "Farm V5",
  address: "9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z",
  networkId: NetworkId.solana,
};

const farmV6Contract = {
  name: "Farm V6",
  address: "FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG",
  networkId: NetworkId.solana,
};

const idoContract = {
  name: "IDO V1",
  address: "6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF",
  networkId: NetworkId.solana,
};

const idoV2Contract = {
  name: "IDO V2",
  address: "CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH",
  networkId: NetworkId.solana,
};

const idoV3Contract = {
  name: "IDO V3",
  address: "9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC",
  networkId: NetworkId.solana,
};

const idoV4Contract = {
  name: "IDO V4",
  address: "DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi",
  networkId: NetworkId.solana,
};

const launchpadContract = {
  name: "Launchpad",
  address: "LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj",
  networkId: NetworkId.solana,
};

export const ammV4Service: ServiceRaw = {
  id: `${platform.id}-amm-v4`,
  name: "AMM v4",
  platformId: platform.id,
  contractsRaw: [ammV4Contract],
};

export const ammV5Service: ServiceRaw = {
  id: `${platform.id}-amm-v5`,
  name: "AMM v5",
  platformId: platform.id,
  contractsRaw: [ammV5Contract],
};

export const ammRootingService: ServiceRaw = {
  id: `${platform.id}-amm-rooting`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [ammRootingContract],
  link: "https://raydium.io/swap/",
  description:
    "Token swap router that finds optimal routes across all AMM pools to execute trades with minimal slippage.",
};

export const clmmService: ServiceRaw = {
  id: `${platform.id}-clmm`,
  name: "CLMM",
  platformId: platform.id,
  contractsRaw: [clmmContract],
  link: "https://raydium.io/clmm/pools/",
  description:
    "Concentrated Liquidity Market Maker pools allowing LPs to provide liquidity within custom price ranges for higher capital efficiency and increased fee earnings.",
};

export const cpmmService: ServiceRaw = {
  id: `${platform.id}-cpmm`,
  name: "CPMM",
  platformId: platform.id,
  contractsRaw: [cpmmContract],
  link: "https://raydium.io/liquidity/pools/",
  description:
    "Constant Product Market Maker pools using the x*y=k formula for permissionless liquidity provision across the full price range.",
};

export const farmV3Service: ServiceRaw = {
  id: `${platform.id}-farm-v3`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [farmV3Contract],
  description:
    "RAY token staking for earning protocol rewards and governance participation.",
};

export const farmV4Service: ServiceRaw = {
  id: `${platform.id}-farm-v4`,
  name: "Farm V4",
  platformId: platform.id,
  contractsRaw: [farmV4Contract],
};

export const farmV5Service: ServiceRaw = {
  id: `${platform.id}-farm-v5`,
  name: "Farm V5",
  platformId: platform.id,
  contractsRaw: [farmV5Contract],
};

export const farmV6Service: ServiceRaw = {
  id: `${platform.id}-farm-v6`,
  name: "Farm V6",
  platformId: platform.id,
  contractsRaw: [farmV6Contract],
};

export const idoV1Service: ServiceRaw = {
  id: `${platform.id}-ido-v1`,
  name: "IDO V1",
  platformId: platform.id,
  contractsRaw: [idoContract],
};

export const idoV2Service: ServiceRaw = {
  id: `${platform.id}-ido-v2`,
  name: "IDO V2",
  platformId: platform.id,
  contractsRaw: [idoV2Contract],
};

export const idoV3Service: ServiceRaw = {
  id: `${platform.id}-ido-v3`,
  name: "IDO V3",
  platformId: platform.id,
  contractsRaw: [idoV3Contract],
};

export const idoV4Service: ServiceRaw = {
  id: `${platform.id}-ido-v4`,
  name: "IDO V4",
  platformId: platform.id,
  contractsRaw: [idoV4Contract],
};

export const launchpadService: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [launchpadContract],
  link: "https://raydium.io/launchpad/",
  description:
    "Token launch platform enabling new projects to bootstrap liquidity and distribute tokens through fair launch mechanics.",
};

export const services: ServiceRaw[] = [
  ammV4Service,
  ammV5Service,
  ammRootingService,
  clmmService,
  cpmmService,
  farmV3Service,
  farmV4Service,
  farmV5Service,
  farmV6Service,
  idoV1Service,
  idoV2Service,
  idoV3Service,
  idoV4Service,
  launchpadService,
];
