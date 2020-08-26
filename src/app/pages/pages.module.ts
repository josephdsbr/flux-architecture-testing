import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PaymentCheckoutComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
