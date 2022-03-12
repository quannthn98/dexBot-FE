import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BotSwapComponent } from './bot-swap/bot-swap.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [BotSwapComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
