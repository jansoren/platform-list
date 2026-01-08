import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "1inch",
  name: "1inch",
  description:
    "1inch is a DEX aggregator that combines liquidity across multiple exchanges and chains to find optimal swap rates, offering native cross-chain swaps between Solana and EVM networks.",
  tags: ["bridge"],
  links: {
    website: "https://1inch.com/",
    discord: "https://discord.com/invite/1inch",
    twitter: "https://x.com/1inch",
    github: "https://github.com/1inch",
    documentation: "https://docs.1inch.io/",
  },
  addedAt: 1763726400000,
};

const sourceContract = {
  name: "Cross-Chain Escrow Source",
  address: "4yBT18tBcWqCDK8p3RMXdmZMjHr3wJM7jM6HVYemEqGh",
  networkId: NetworkId.solana,
};

const destinationContract = {
  name: "Cross-Chain Escrow Destination",
  address: "AMEAktCrii7mVFQKCM9i5hKES4YrV3zFagrawr8BY8pb",
  networkId: NetworkId.solana,
};

const whitelistContract = {
  name: "Whitelist Validator",
  address: "5XYZ3LMWECpC6u7BWLskMMNx4xWbXF44dpDxvkVqkHtA",
  networkId: NetworkId.solana,
};

const whitelistService: ServiceRaw = {
  id: `${platform.id}-whitelist`,
  name: "Whitelist Service",
  platformId: platform.id,
  contractsRaw: [whitelistContract],
  description:
    "Resolver validation service managing approved addresses for cross-chain transaction execution.",
};

export const crossCHainService: ServiceRaw = {
  id: `${platform.id}-cross-chain-escrow`,
  name: "Cross-Chain Escrow",
  platformId: platform.id,
  contractsRaw: [sourceContract, destinationContract],
  description:
    "Cross-chain swap escrow handling atomic token exchanges between networks with source and destination contracts.",
};

export const services: ServiceRaw[] = [whitelistService, crossCHainService];
