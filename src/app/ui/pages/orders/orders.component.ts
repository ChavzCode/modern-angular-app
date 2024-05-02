import { Component, signal } from '@angular/core';

import { Order } from '../../../domain/models/order/order';
import { OrderDetailComponent } from '../../shared/molecules/order-detail/order-detail.component';
import { CheckoutComponent } from '../../shared/molecules/checkout/checkout.component';
import { Product } from '../../../domain/models/product/product';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderDetailComponent, CheckoutComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  currentView = signal<'order' | 'orders'>('orders');
  orders = signal<Array<Order>>([]);
  orderReview = signal<Product[]>([]);

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    //Must be replaced with API Call
    const rawOrders = window.sessionStorage.getItem('orders') ?? '';
    const parsedOrders = rawOrders != '' ? JSON.parse(rawOrders) : [];
    this.orders.set(parsedOrders);
  }

  reviewOrder(i: number) {
    this.currentView.update(() => 'order');
    this.orderReview.set(this.orders()[i].products);
  }

  goToOrders() {
    this.currentView.update(() => 'orders');
  }
}
