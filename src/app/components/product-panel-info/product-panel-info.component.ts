import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-panel-info',
  templateUrl: './product-panel-info.component.html',
  styleUrls: ['./product-panel-info.component.scss']
})
export class ProductPanelInfoComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor() { }

  ngOnInit() {
    console.log(this.cartItem);
  }

}
