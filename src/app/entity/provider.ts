import {Network} from './network';

export interface Provider {
  id?: number;
  network?: Network;
  http?: string;
  wss?: string;
}
