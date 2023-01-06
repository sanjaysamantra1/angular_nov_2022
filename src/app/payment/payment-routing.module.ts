import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymenthomeComponent } from './components/paymenthome/paymenthome.component';

const routes: Routes = [{ path: '', component: PaymenthomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
