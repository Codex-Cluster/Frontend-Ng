import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [DetailsComponent, CheckoutComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PaymentModule {}
