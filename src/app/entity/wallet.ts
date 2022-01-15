import {CoinInfo} from './coin-info';

export interface Wallet {
  id?: number;
  address?: string;
  coins?: CoinInfo[];
}
