import { CartItem } from 'src/app/models/cart.model';
import * as faker from 'faker';

export const CartItemsMock: CartItem[] = [
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: faker.random.number(),
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
]
