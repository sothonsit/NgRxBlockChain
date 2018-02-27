import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Blockchain } from '../model/blockchain.model';
import { of } from 'rxjs/observable/of';
import { BlockChainMock } from '../mock/block-chain.mock';
import * as fromBlockChain from '../reducers/blockchain';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/block-chain';


@Injectable()
export class BlockChainService {

    state: Observable<fromBlockChain.State>;

    constructor(private store: Store<fromBlockChain.State>) {
        this.state = this.store;
    }

    getCoin(): Observable<Blockchain[]> {
        return of(BlockChainMock);
    }

    addCoin(payload: Blockchain): Observable<boolean> {
        return of(true);
    }

    deleteCoin(payload: Blockchain): Observable<boolean> {
        return of(true);
    }
}
