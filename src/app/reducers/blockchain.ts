import * as Action from '../actions/block-chain';
import { Blockchain } from '../model/blockchain.model';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    results: Array<Blockchain>;
}

export const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    results: []
};

export function reducer(state = initialState, action: Action.Actions): State {
    switch (action.type) {
        case Action.GET_COIN: {
          return {
            ...state,
            isLoading: true,
            isLoadSuccess: false,
            results: []
          };
        }
        case Action.GET_COIN_SUCCESS: {
          return {
            ...state,
            isLoading: false,
            isLoadSuccess: true,
            results: action.payload
          };
        }
        case Action.ADD_COIN: {
          return {
            ...state,
            isLoading: true,
            isLoadSuccess: false,
            results: [...state.results, action.payload]
          };
        }
        case Action.ADD_COIN_SUCCESS: {
          return {
            ...state,
            isLoading: false,
            isLoadSuccess: action.payload
          };
        }
        case Action.DEL_COIN: {
          return {
            ...state,
            isLoading: true,
            isLoadSuccess: false,
            results: state.results.filter(r => r.name !== action.payload.name && r.price !== action.payload.price)
          };
        }
        case Action.DEL_COIN_SUCCESS: {
          return {
            ...state,
            isLoading: false,
            isLoadSuccess: action.payload
          };
        }
        default: {
          return state;
        }
      }
}
