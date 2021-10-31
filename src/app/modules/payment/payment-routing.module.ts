import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
