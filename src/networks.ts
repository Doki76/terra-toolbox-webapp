import { NetworkInfo } from "@terra-money/wallet-provider";

type ToolboxNetworkInfo = NetworkInfo & LocalNetworkConfig;

const networks: Record<string, ToolboxNetworkInfo> = {
  mainnet: {
    name: "mainnet",
    chainID: "columbus-5",
    lcd: "https://lcd.terra.dev",
    mantle: "https://mantle.terra.dev/",
    stats: "https://graph.mirror.finance/graphql",
    shuttle: {
      ethereum: "terra13yxhrk08qvdf5zdc9ss5mwsg5sf7zva9xrgwgc",
      bsc: "terra1g6llg3zed35nd3mh9zx6n64tfw3z67w2c48tn2",
    },
    fee: { gasPrice: 0.15, amount: 100000 },
  },
  testnet: {
    name: "testnet",
    chainID: "bombay-12",
    lcd: "https://bombay-lcd.terra.dev",
    mantle: "https://bombay-mantle.terra.dev/",
    stats: "https://bombay-mirror-graph.terra.dev/graphql",
    shuttle: {
      ethereum: "terra10a29fyas9768pw8mewdrar3kzr07jz8f3n73t3",
      bsc: "terra1paav7jul3dzwzv78j0k59glmevttnkfgmgzv2r",
    },
    fee: { gasPrice: 0.15, amount: 100000 },
  },
  moonshine: {
    name: "moonshine",
    chainID: "localterra",
    lcd: "https://moonshine-lcd.terra.dev",
    mantle: "https://moonshine-mantle.terra.dev",
    stats: "https://moonshine-mirror-graph.terra.dev/graphql",
    shuttle: {
      ethereum: "",
      bsc: "",
    },
    fee: { gasPrice: 0.15, amount: 100000 },
  },
};
export const defaultNetwork = networks.mainnet;

export default networks;
