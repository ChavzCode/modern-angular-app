import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../../core/services/shopping-cart/shopping-cart.service';
import { CheckoutComponent } from '../../shared/molecules/checkout/checkout.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CheckoutComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {
  private shoppingCart = inject(ShoppingCartService)
  private router = inject(Router)

  checkoutProducts = this.shoppingCart.shoppingCart

  createOrder() {
    //Must be replaced with API CALL
    const rawOrders = window.sessionStorage.getItem('orders') ?? '';
    const parsedOrders = rawOrders != '' ? JSON.parse(rawOrders) :  [];
    parsedOrders.push({
      id: Math.floor(Math.random() * 9999),
      products: this.checkoutProducts(),
      date: new Date(),
      userId: 'user1'
    });
    window.sessionStorage.setItem('orders', JSON.stringify(parsedOrders));
  }

  radicateOrder() {
    this.createOrder();
    this.shoppingCart.emptyCar();
    this.router.navigate(['/orders']);
  }
}
