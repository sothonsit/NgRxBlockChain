import { Component, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../reducers';
import { Blockchain } from '../model/blockchain.model';
import * as Actions from '../actions/block-chain';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  coins: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.coins = this.store.select(fromStore.getListBlockChain);
   }

  ngOnInit() {
    this.store.dispatch(new Actions.GetCoin());
  }

  onDelete(data: Blockchain) {
    this.store.dispatch(new Actions.DeleteCoin({
      name: data.name,
      price: data.price
    }));
  }

}
