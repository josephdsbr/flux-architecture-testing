import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CartState } from '../models/cart.model';
import { cartReducer } from './modules/cart/cart.reducer';

export interface AppState {
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
