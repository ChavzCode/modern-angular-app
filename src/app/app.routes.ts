import { Routes } from '@angular/router';

import { HomeComponent } from './ui/pages/home/home.component';
import { CategoryComponent } from './ui/pages/category/category.component';
import { NotFoundComponent } from './ui/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'checkout', loadComponent: () => import('./ui/pages/checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent)},
  { path: 'orders', loadComponent: () => import('./ui/pages/orders/orders.component').then(m => m.OrdersComponent)},
  { path: '**', component: NotFoundComponent },
];
