import {Action} from '@ngrx/store';
import { CartItem } from 'src/app/models/cart.model';

export enum CartActionsType {
  CART_ADD_ITEM = '[CART] ADD ITEM',
  CART_SELECT_ITEM = '[CARD] SELECT ITEM'
}

export class CartAddItem implements Action {
  readonly type = CartActionsType.CART_ADD_ITEM;
  constructor(public payload: CartItem) {}
}

export class CartSelectItem implements Action {
  readonly type = CartActionsType.CART_SELECT_ITEM;
  constructor(public payload: number) {};
}

export type CardActions = CartAddItem | CartSelectItem;
