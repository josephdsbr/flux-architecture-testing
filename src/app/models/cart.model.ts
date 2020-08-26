export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  selected?: boolean;
  imageURI: string;
}
