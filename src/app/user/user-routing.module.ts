import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BotSwapComponent} from './bot-swap/bot-swap.component';


const routes: Routes = [
  {
    path: 'swap',
    component: BotSwapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
