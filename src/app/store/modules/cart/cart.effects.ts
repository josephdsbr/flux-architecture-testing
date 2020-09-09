import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CartActionsType, CartCalculateValue } from './cart.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class CartEffects {
  constructor(private actions: Actions) {}

  @Effect()
  selectItems = this.actions.pipe(
    ofType(CartActionsType.CART_SELECT_ITEM),
    map(() => new CartCalculateValue())
  )
}
