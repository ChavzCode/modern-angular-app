import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../domain/models/product/product';
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
  checkoutProducts = signal<Product[]>([]);

  constructor(
    private shoppingCart: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkoutProducts.set(this.shoppingCart.getCart());
  }

  createOrder() {
    //Must be replaced with API CALL
    const orders = window.sessionStorage.getItem('orders') ?? '';

    if (JSON.parse(orders).length > 0) {
      const newOrders = JSON.parse(orders);
      newOrders.push(this.checkoutProducts());
      window.sessionStorage.setItem('orders', JSON.stringify(newOrders));
    } else {
      window.sessionStorage.setItem(
        'orders',
        JSON.stringify([this.checkoutProducts()])
      );
    }
  }

  radicateOrder() {
    this.createOrder();
    this.shoppingCart.emptyCar();
    this.router.navigate(['/home']);
  }
}
