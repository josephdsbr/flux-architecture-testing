import { createSelector } from '@ngrx/store';
import { AppState } from '../..';

export const selectCart = (state: AppState) => state.cart;

export const selectItems = createSelector(selectCart, state => state.items);
