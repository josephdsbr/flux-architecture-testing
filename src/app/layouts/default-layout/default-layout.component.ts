import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  value: number;
  constructor(private store: Store<AppState>) {
    this.store.select(state => state.cart.value).subscribe(value => this.value = value);
  }

  ngOnInit() {
  }

}
