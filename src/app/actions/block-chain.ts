import { Action } from '@ngrx/store';
import { Blockchain } from '../model/blockchain.model';

export const GET_COIN = '[GET] coin';
export const GET_COIN_SUCCESS = '[GET] Coin Success';

export const ADD_COIN = '[ADD] Coin';
export const ADD_COIN_SUCCESS = '[ADD] Coin Success';

export const DEL_COIN = '[DELETE] Coin';
export const DEL_COIN_SUCCESS = '[DELETE] Coin Success';

export const UPD_COIN = 'UPDATE COIN';

export class GetCoin implements Action {
  readonly type = GET_COIN;
  constructor() {}
}

export class GetCoinSuccess implements Action {
  readonly type = GET_COIN_SUCCESS;
  constructor(public payload: Blockchain[]) {}
}

export class AddCoin implements Action {
  readonly type = ADD_COIN;
  constructor(public payload: Blockchain) {}
}

export class AddCoinSuccess implements Action {
  readonly type = ADD_COIN_SUCCESS;
  constructor(public payload: boolean) {}
}

export class DeleteCoin implements Action {
  readonly type = DEL_COIN;
  constructor(public payload: Blockchain) {}
}

export class DeleteCoinSuccess implements Action {
  readonly type = DEL_COIN_SUCCESS;
  constructor(public payload: boolean) {}
}

export class UpdCoin implements Action {
  readonly type = UPD_COIN;
  constructor() {}
}



export type Actions =
  | GetCoin
  | GetCoinSuccess
  | AddCoin
  | AddCoinSuccess
  | DeleteCoin
  | DeleteCoinSuccess
  | UpdCoin;
