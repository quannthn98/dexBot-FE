import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../../service/network.service';
import {DexService} from '../../service/dex.service';
import {ProviderService} from '../../service/provider.service';
import {WalletService} from '../../service/wallet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CoinInfo} from '../../entity/coin-info';
import {environment} from '../../../environments/environment';
import {BotSwapService} from '../../service/bot-swap.service';

const BOT_API_URL = environment.BOT_AI_URL;

@Component({
  selector: 'app-bot-swap',
  templateUrl: './bot-swap.component.html',
  styleUrls: ['./bot-swap.component.css']
})
export class BotSwapComponent implements OnInit {
  selectedNetwork: any = {};
  coinList: CoinInfo[] = [];
  inputDecimal = 18;
  networkId: number;
  temp;

  botSetupForm = new FormGroup({
    privateKey: new FormControl(0),
    dex: new FormControl(),
    provider: new FormControl(),
    inputAmount: new FormControl(),
    inputToken: new FormControl(),
    outputToken: new FormControl(),
    gasPrice: new FormControl(),
    gasLimit: new FormControl(),
    slip: new FormControl()
  });

  constructor(private networkService: NetworkService,
              private dexService: DexService,
              private providerService: ProviderService,
              private walletService: WalletService,
              private botSwapService: BotSwapService) {
  }

  ngOnInit() {
    this.getSetup();
  }

  private getSetup() {
    this.networkService.getAll().subscribe((networks) => {
      this.networkService.networkList = networks;
    });
  }

  private getSetupByNetwork(networkId: string) {
    this.networkId = parseInt(networkId, 0);
    this.providerService.getByNetwork(this.networkId).subscribe((providers) => {
      this.providerService.providerList = providers;
    });
    this.dexService.getByNetwork(this.networkId).subscribe((dexes) => {
      this.dexService.dexList = dexes;
    });
  }

  startBot() {
    const tradeSetup = {
      privateKey: this.botSetupForm.value.privateKey,
      dexRouter: this.botSetupForm.value.dex,
      provider: this.botSetupForm.value.provider,
      inputAmount: this.botSetupForm.value.inputAmount,
      inputToken: this.botSetupForm.value.inputToken,
      outputToken: this.botSetupForm.value.outputToken,
      gasPrice: this.botSetupForm.value.gasPrice,
      gasLimit: this.botSetupForm.value.gasLimit,
      slip: this.botSetupForm.value.slip,
      deci: this.inputDecimal
    };

    this.botSwapService.startBot(tradeSetup).subscribe((data) => {
      console.log(data);
    });
  }
}
