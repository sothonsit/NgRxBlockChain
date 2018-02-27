import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { reducers } from './reducers';
import { DisplayComponent } from './display/display.component';
import { EffectsModule } from '@ngrx/effects';
import { BlockChainEffects } from './effects/block-chain.effect';
import { BlockChainService } from './service/block-chain.service';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      BlockChainEffects
    ]),
    ReactiveFormsModule
  ],
  providers: [
    BlockChainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
