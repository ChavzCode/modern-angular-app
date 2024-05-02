import { Routes } from '@angular/router';

import { HomeComponent } from './ui/pages/home/home.component';
import { CategoryComponent } from './ui/pages/category/category.component';
import { CheckoutPageComponent } from './ui/pages/checkout-page/checkout-page.component';
import { OrdersComponent } from './ui/pages/orders/orders.component';
import { NotFoundComponent } from './ui/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', component: NotFoundComponent },
];
