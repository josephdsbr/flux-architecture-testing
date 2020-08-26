import produce from 'immer';
import { CartItemsMock } from 'src/app/assets/mocks/cart-items.mock';
import { CartState } from "src/app/models/cart.model";
import { CardActions, CartActionsType } from './cart.actions';

const cartInitialState: CartState = {
  items: CartItemsMock
};

export const cartReducer = (state: CartState = cartInitialState, action: CardActions): CartState => {
  return produce(state, draft => {
    switch (action.type) {
      case CartActionsType.CART_ADD_ITEM:
        draft.items.push(action.payload);
        break;
      case CartActionsType.CART_SELECT_ITEM:
        draft.items.forEach(item => {
          item.selected = item.id === action.payload;
        });
        break;
    }
  })
}