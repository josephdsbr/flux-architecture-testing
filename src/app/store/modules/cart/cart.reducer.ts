import produce from 'immer';
import { CartItemsMock } from 'src/app/assets/mocks/cart-items.mock';
import { CartState } from "src/app/models/cart.model";
import { CardActions, CartActionsType } from './cart.actions';

export const cartInitialState: CartState = {
  items: CartItemsMock,
  value: 0
};

export const CartReducer = (state: CartState = cartInitialState, action: CardActions): CartState => {
  return produce(state, draft => {
    switch (action.type) {
      case CartActionsType.CART_SELECT_ITEM:
        draft.items.forEach(item => {
          if (item.id == action.payload) {
            item.selected = !item?.selected;
          }
        });
        break;
      case CartActionsType.CART_CALCULATE_VALUE:
        draft.value = draft.items.filter(item => item?.selected)
        .map(filteredItem => filteredItem.price)
        .reduce((x, y) => x + y, 0);
        break;
    }
  })
}
