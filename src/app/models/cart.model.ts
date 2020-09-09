export interface CartState {
  items: CartItem[];
  value: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  selected?: boolean;
  imageURI: string;
}
