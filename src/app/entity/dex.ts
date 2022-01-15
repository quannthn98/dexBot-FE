import {Network} from './network';

export interface Dex {
  id?: number;
  name?: string;
  url?: string;
  router?: string;
  factory?: string;
  network?: Network;
}
