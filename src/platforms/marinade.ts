import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "marinade",
  name: "Marinade",
  description:
    "Marinade connects SOL holders with the best staking rates on Solana.",
  defiLlamaId: "parent#marinade-finance",
  links: {
    website: "https://marinade.finance/",
    discord: "https://discord.gg/yTdH8YkYKg",
    twitter: "https://twitter.com/MarinadeFinance",
    github: "https://github.com/marinade-finance",
    documentation: "https://docs.marinade.finance/",
  },
  tokens: [
    "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
    "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
  ],
  tags: ["lst", "dapp"],
};

const contract = {
  name: "Ticket",
  address: "MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD",
};

const airdropContract = {
  name: "Airdrop",
  address: "indiXdKbsC4QSLQQnn6ngZvkqfywn6KgEeQbkGSpk1V",
};

const service: ServiceRaw = {
  id: `${platform.id}-ticket`,
  name: "Ticket",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [service, airdropService];
export default services;
