import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "zeus",
  name: "Zeus",
  links: {
    website: "https://app.zeusguardian.io/",
    twitter: "https://x.com/ZeusNetworkHQ",
    documentation: "https://docs.zeusnetwork.xyz/",
    github: "https://github.com/ZeusNetworkHQ",
    discord: "https://discord.com/invite/zeusnetwork",
    medium: "https://medium.com/@zeus-network",
  },
  tokens: ["ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq"],
  description: "First Multichain Layer on Solana.",
  tags: ["dapp"],
};

const bootstrapperContract = {
  name: "Bootstrapper",
  address: "ZPLsAzVmV6gRipY8dzoWcGWJ81tkPUN9M7YfxJPru9w",
};

const bitcoinSPVContract = {
  name: "BitcoinSPV",
  address: "ZPLowzr41tCGkoRXuzEx4Ts98Jjrbfe9rtv7gqdgGkH",
};

const layerCAContract = {
  name: "LayerCA",
  address: "ZPLtKX3gHTa4djEdmkZXkXiJdTUEeD5ZjZD4jAnxrSP",
};

const delegatorContract = {
  name: "Delegator",
  address: "ZPLt7XEyRvRxEZcGFGnRKGLBymFjQbwmgTZhMAMfGAU",
};

const liquidityManagementContract = {
  name: "LiquidityManagement",
  address: "ZPLuj6HoZ2z6y6WfJuHz3Gg48QeMZ6kGbsa74oPxACY",
};

const twoWayPegContract = {
  name: "TwoWayPeg",
  address: "ZPLzxjNk1zUAgJmm3Jkmrhvb4UaLwzvY2MotpfovF5K",
};

const bootstrapperService: ServiceRaw = {
  id: `${platform.id}-bootstrapper`,
  name: "Bootstrapper",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bootstrapperContract],
};

const bitcoinSPVService: ServiceRaw = {
  id: `${platform.id}-bitcoin-spv`,
  name: "BitcoinSPV",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [bitcoinSPVContract],
};

const layerCAService: ServiceRaw = {
  id: `${platform.id}-layer-ca`,
  name: "LayerCA",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [layerCAContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [delegatorContract],
};

const liquidityManagementService: ServiceRaw = {
  id: `${platform.id}-liquidity-management`,
  name: "LiquidityManagement",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [liquidityManagementContract],
};

const twoWayPegService: ServiceRaw = {
  id: `${platform.id}-two-way-peg`,
  name: "TwoWayPeg",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [twoWayPegContract],
};

export const services: ServiceRaw[] = [
  bootstrapperService,
  bitcoinSPVService,
  layerCAService,
  stakingService,
  liquidityManagementService,
  twoWayPegService,
];
export default services;
