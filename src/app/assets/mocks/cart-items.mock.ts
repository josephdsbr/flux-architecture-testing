import { CartItem } from 'src/app/models/cart.model';
import * as faker from 'faker';

export const CartItemsMock: CartItem[] = [
  {
    id: 1,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 5,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 6,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 7,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 8,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
  {
    id: 9,
    name: faker.random.word(),
    price: faker.random.number(),
    selected: faker.random.boolean(),
    imageURI: 'https://picsum.photos/200/300'
  },
]
