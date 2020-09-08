import { CartState } from './../../../../models/cart.model';
import { CartItemsMock } from 'src/app/assets/mocks/cart-items.mock';
import { CartItem } from 'src/app/models/cart.model';
import * as cartActions from '../cart.actions';
import * as cartReducer from '../cart.reducer';
import { cartInitialState } from '../cart.reducer';

it('should pass test', () => {
  expect(true).toBeTruthy();
})

it('should add an item into the cart', () => {
  const payload: CartItem = { id: 1, name: 'Game', price: 2500, imageURI: '' };
  const action = new cartActions.CartAddItem(payload);
  const result = cartReducer.CartReducer(cartInitialState, action);

  expect(result).toStrictEqual({
    ...cartInitialState,
    items: [...CartItemsMock, payload]
  })
})


it('should select an item into the cart', () => {
  const payload: CartItem = { id: 1, name: 'Game', price: 2500, imageURI: '', selected: false };
  const items: CartItem[] = [payload];
  const initialState: CartState = {
    items
  };
  const action = new cartActions.CartSelectItem(1);
  const result = cartReducer.CartReducer(initialState, action);

  expect(result.items).toStrictEqual([{ ...payload, selected: true }])
})
