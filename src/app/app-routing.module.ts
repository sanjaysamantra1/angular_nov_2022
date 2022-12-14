import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { AuthGuard } from './guards/auth.guard';
import { CareerGuard } from './guards/career.guard';
import { GroceryGuard } from './guards/grocery.guard';
import { HasChangesGuard } from './guards/has-changes.guard';
import { ProductResolverService } from './services/product-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canDeactivate: [HasChangesGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard],
    canDeactivate: [HasChangesGuard],
  },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: 'permanent', component: PermanentjobsComponent },
      { path: 'contract', component: ContractjobsComponent },
    ],
    canActivateChild:[CareerGuard]
  },
  { path: 'products', component: ProductsComponent },
  {
    path: 'productdetails/:id',
    component: ProductdetailsComponent,
    resolve: { productInfo: ProductResolverService },
  },
  { path: 'productdetail', component: ProductdetailComponent },
  {
    path: 'grocery',
    loadChildren: () =>
      import('./grocery/grocery.module').then((m) => m.GroceryModule),
    canLoad: [GroceryGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentModule),
  },
  { path: '', component: HomeComponent }, // default
  { path: '**', component: NotfoundComponent }, // wrong
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
