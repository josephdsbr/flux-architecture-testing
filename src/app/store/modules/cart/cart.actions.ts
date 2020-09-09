import {Action} from '@ngrx/store';

export enum CartActionsType {
  CART_SELECT_ITEM = '[CART] SELECT ITEM',
  CART_CALCULATE_VALUE = '[CART] CALCULATE VALUE'
}

export class CartSelectItem implements Action {
  readonly type = CartActionsType.CART_SELECT_ITEM;
  constructor(public payload: number) {};
}

export class CartCalculateValue implements Action {
  readonly type = CartActionsType.CART_CALCULATE_VALUE;
  constructor() {};
}

export type CardActions = CartSelectItem | CartCalculateValue;
