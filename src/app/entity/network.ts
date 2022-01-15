import {CoinInfo} from './coin-info';

export interface Network {
  id?: number;
  name: string;
  chainId: string;
  mainCoin: string;
  explorer: string;
  defaultCoin?: CoinInfo[];
}
