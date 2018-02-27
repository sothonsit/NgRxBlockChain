import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Act from '../actions/block-chain';
import { BlockChainService } from '../service/block-chain.service';

@Injectable()
export class BlockChainEffects {

    constructor(
        private actions: Actions,
        private blockChainService: BlockChainService
    ) {}


    @Effect()
    searchCoins = this.actions.ofType(Act.GET_COIN)
    .map(toPayload)
    .mergeMap(payload => {
      return this.blockChainService
      .getCoin()
      .map(data => new Act.GetCoinSuccess(data));
    });

    @Effect()
    addCoin = this.actions.ofType(Act.ADD_COIN)
    .map(toPayload)
    .mergeMap(payload => {
        return this.blockChainService
        .addCoin(payload)
        .map(result => new Act.AddCoinSuccess(result));
    });

    @Effect()
    deleteCoin = this.actions.ofType(Act.DEL_COIN)
    .map(toPayload)
    .mergeMap(payload => {
        return this.blockChainService
        .deleteCoin(payload)
        .map(result => new Act.DeleteCoinSuccess(result));
    });
}
