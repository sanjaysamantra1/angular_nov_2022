import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymenthomeComponent } from './components/paymenthome/paymenthome.component';


@NgModule({
  declarations: [
    PaymenthomeComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
