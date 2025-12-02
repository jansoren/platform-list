import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "1inch",
  name: "1inch",
  tags: ["bridge"],
  links: {
    website: "https://1inch.com/",
    discord: "https://discord.com/invite/1inch",
    twitter: "https://x.com/1inch",
    github: "https://github.com/1inch",
  },
};

const sourceContract = {
  name: "Cross-Chain Escrow Source",
  address: "4yBT18tBcWqCDK8p3RMXdmZMjHr3wJM7jM6HVYemEqGh",
};

const destinationContract = {
  name: "Cross-Chain Escrow Destination",
  address: "AMEAktCrii7mVFQKCM9i5hKES4YrV3zFagrawr8BY8pb",
};

const whitelistContract = {
  name: "Whitelist Validator",
  address: "5XYZ3LMWECpC6u7BWLskMMNx4xWbXF44dpDxvkVqkHtA",
};

const whitelistService: ServiceRaw = {
  id: `${platform.id}-whitelist`,
  name: "Whitelist Service",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [whitelistContract],
};

export const services: ServiceRaw[] = [whitelistService];
export default services;
