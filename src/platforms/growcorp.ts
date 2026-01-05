import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "growcorp",
  name: "Grow Corp",
  description:
    "GROW CORP is a PvP farming game on Solana where players compete for 8 crop slots. Plant crops, earn $GROW tokens, and defend your harvest from other farmers.",
  tags: ["tool"],
  links: {
    website: "https://growcorp.org/",
    twitter: "https://x.com/growingcorp",
    documentation: "https://docs.growcorp.org/",
  },
  tokens: ["6M1YktCLJUyAZwWbJuRrM3pKBmo8KpYeDZm9bk1Jr4gX"],
};

const v3Contract = {
  name: "Grow",
  address: "CJJD2C8Gq7wdtLwT9GjGa37vxjAgVzNzyYfp77Fzb7i8",
  networkId: NetworkId.solana,
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "Grow",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
