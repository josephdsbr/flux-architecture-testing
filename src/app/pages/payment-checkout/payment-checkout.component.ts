import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart.model';
import { AppState } from 'src/app/store';
import { CartSelectItem } from 'src/app/store/modules/cart/cart.actions';
import { selectItems } from 'src/app/store/modules/cart/cart.selectors';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss']
})
export class PaymentCheckoutComponent implements OnInit {
  items: CartItem[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(selectItems).subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

  onHandleSelectItem(id: number) {
    this.store.dispatch(new CartSelectItem(id));
  }

}
