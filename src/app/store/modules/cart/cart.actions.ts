import {Action} from '@ngrx/store';
import { CartItem } from 'src/app/models/cart.model';

export enum CartActionsType {
  CART_SELECT_ITEM = '[CARD] SELECT ITEM'
}

export class CartSelectItem implements Action {
  readonly type = CartActionsType.CART_SELECT_ITEM;
  constructor(public payload: number) {};
}

export type CardActions = CartSelectItem;
