import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBlockChain from './blockchain';
import { StoreModule } from '@ngrx/store';

export interface State {
  state: fromBlockChain.State;
}

export const reducers = {
  state: fromBlockChain.reducer
};

export const getBlockChainState = (state: State) => state.state;

export const getListBlockChain = createSelector(
    getBlockChainState,
  (state: fromBlockChain.State) => {
    return state.results;
  }
);
