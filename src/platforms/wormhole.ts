import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "wormhole",
  name: "Wormhole",
  description:
    "Future-proof, permissionless tooling to empower multichain builders",
  links: {
    website: "https://w.wormhole.com/",
    discord: "https://discord.com/invite/wormholecrypto",
    telegram: "https://t.me/wormholecrypto",
    twitter: "https://twitter.com/wormhole",
    github: "https://github.com/wormhole-foundation",
    documentation: "https://wormhole.com/docs/",
  },
  tokens: ["85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"],
  tags: ["tool", "bridge", "dapp"],
};

const mainContract = {
  name: "Main",
  address: "HDwcJBJXjL9FpJ7UBsYBtaDjsBUhuLCUYoz3zr8SWWaQ",
};

const coreContract = {
  name: "Core",
  address: "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth",
};

const legacyStakingContract = {
  name: "Legacy Staking",
  address: "sspu65omPW2zJGWDxmx8btqxudHezoQHSGZmnW8jbVz",
};

const stakingContract = {
  name: "Staking",
  address: "MGoV9M6YUsdhJzjzH9JMCW2tRe1LLxF1CjwqKC7DR1B",
};

const tokenBridgeContract = {
  name: "Token Bridge",
  address: "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb",
};

const tokenBridgeRelayerContract = {
  name: "Token Bridge Relayer",
  address: "3vxKRPwUTiEkeUVyoZ9MXFe1V71sRLbLqu1gRYaWmehQ",
};

const tbtcBridgeContract = {
  name: "tBTC Bridge",
  address: "87MEvHZCXE3ML5rrmh5uX1FbShHmRXXS32xJDGbQ7h5t",
};

const legacyStakingService: ServiceRaw = {
  id: `${platform.id}-legacy-staking`,
  name: "Legacy Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [legacyStakingContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

const tbtcBridgeService: ServiceRaw = {
  id: `${platform.id}-tbtc-bridge`,
  name: "tBTC Bridge",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [tbtcBridgeContract],
};

export const services: ServiceRaw[] = [
  legacyStakingService,
  stakingService,
  tbtcBridgeService,
];
export default services;
