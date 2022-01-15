import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../../service/network.service';
import {DexService} from '../../service/dex.service';
import {ProviderService} from '../../service/provider.service';
import {WalletService} from '../../service/wallet.service';
import {Network} from '../../entity/network';

@Component({
  selector: 'app-bot-swap',
  templateUrl: './bot-swap.component.html',
  styleUrls: ['./bot-swap.component.css']
})
export class BotSwapComponent implements OnInit {
  selectedNetwork: any = {};
  networkId: number = 0;

  constructor(private networkService: NetworkService,
              private dexService: DexService,
              private providerService: ProviderService,
              private walletService: WalletService) {
  }

  ngOnInit() {
    this.getSetup();
  }

  private getSetup() {
    this.networkService.getAll().subscribe((networks) => {
      this.networkService.networkList = networks;
    });
  }

  private getSetupByNetwork() {
    this.providerService.getByNetwork(this.networkId).subscribe((providers) => {
      this.providerService.providerList = providers;
    });
    this.dexService.getByNetwork(this.networkId).subscribe((dexes) => {
      this.dexService.dexList = dexes;
    });
  }
}
