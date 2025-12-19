import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "carrot",
  name: "Carrot",
  description:
    "Carrot is a yield-bearing stablecoin protocol that mints CRT tokens backed by yield-generating DeFi strategies.",
  defiLlamaId: "carrot",
  links: {
    website: "https://deficarrot.com/",
    twitter: "https://x.com/DeFiCarrot",
    discord: "https://discord.gg/carrot",
    documentation: "https://docs.deficarrot.com/",
  },
  tokens: [
    "CRTx1JouZhzSU6XytsE42UQraoGqiHgxabocVfARTy2s",
    "uWmCyJDELc3PyG5JQpRbA4UVa3ra2jRsk8wkdSTEz6W",
    "BxEHFUpAD9ffHPSPom1h4CAydRX5rwNBD5NVA1vfTqbn",
    "BXEjfmuDGSJxvUGqw1tdSnvpQYuMUGVgxYZLjUWPUcB9",
  ],
  tags: ["stablecoin", "dapp"],
};

const minterContract = {
  name: "Minter",
  address: "CarrotwivhMpDnm27EHmRLeQ683Z1PufuqEmBZvD282s",
  networkId: NetworkId.solana,
};

const boostContract = {
  name: "Boost",
  address: "C73nDAFn23RYwiFa6vtHshSbcg8x6BLYjw3bERJ3vHxf",
  networkId: NetworkId.solana,
};

export const minterService: ServiceRaw = {
  id: `${platform.id}-minter`,
  name: "Minter",
  platformId: platform.id,
  contractsRaw: [minterContract],
  link: "https://deficarrot.com/",
  description:
    "Stablecoin yield aggregator minting CRT tokens backed by USDC, USDT, and PYUSD deposits earning optimized yields across lending protocols.",
};

export const boostService: ServiceRaw = {
  id: `${platform.id}-boost`,
  name: "Boost",
  platformId: platform.id,
  contractsRaw: [boostContract],
  description:
    "Leveraged yield strategy using recursive lending loops to amplify returns on yield-bearing assets within a single transaction.",
};

export const services: ServiceRaw[] = [minterService, boostService];
