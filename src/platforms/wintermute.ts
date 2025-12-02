import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
export const platform: PlatformRaw = {
  id: "wintermute",
  name: "Wintermute",
  links: {
    website: "https://www.wintermute.com/",
    twitter: "https://x.com/wintermute_t",
  },
  tags: ["liquidity-provider"],
};

const contract = {
  name: "Order Engine",
  address: "2En5Y11SEAGLNmEezTuRUCwTyzyNReHaMbSnS5gjGsL1",
};

const tradeService: ServiceRaw = {
  id: `${platform.id}-order-engine`,
  name: "Order Engine",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [tradeService];
export default services;
