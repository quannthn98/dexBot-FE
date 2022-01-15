import {Network} from './network';

export interface CoinInfo {
  id?: number;
  symbol?: string;
  contract?: string;
  decimal?: number;
  network?: Network;
}
