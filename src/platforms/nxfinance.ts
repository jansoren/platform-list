import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "nxfinance",
  name: "NX Finance",
  defiLlamaId: "nx-finance",
  links: {
    website: "https://www.nxfinance.info/",
    discord: "https://discord.com/invite/nxfinance",
    twitter: "https://twitter.com/NX_Finance",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Lend",
  address: "NXFiKimQN3QSL3CDhCXddyVmLfrai8HK36bHKaAzK7g",
};

const leverageContract = {
  name: "Leverage",
  address: "EHBN9YKtMmrZhj8JZqyBQRGqyyeHw5xUB1Q5eAHszuMt",
};

const stakingContract = {
  name: "Staking",
  address: "9un1MopS4NRhgVDLXB1DqoQDTmq1un48YKJuPiMLpSc9",
};

const airdropContract = {
  name: "Airdrop S2",
  address: "AFGtKskic2qabduNyvykojV5nbdMsg8vet74ehreQ4bh",
};

const service: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Lend",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [leverageContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  service,
  leverageService,
  stakingService,
  airdropService,
];
export default services;
