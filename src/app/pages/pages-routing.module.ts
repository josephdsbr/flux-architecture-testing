import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PaymentCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
})

export class PagesRoutingModule {}
