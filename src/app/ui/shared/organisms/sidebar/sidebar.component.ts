import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline';

import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { ProductDetailComponent } from '../../molecules/product-detail/product-detail.component';
import { CheckoutComponent } from '../../molecules/checkout/checkout.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ProductDetailComponent, CheckoutComponent, NgIconComponent],
  providers: [provideIcons({ heroXMark })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private sidebar = inject(SidebarService);
  private shoppingCart = inject(ShoppingCartService);
  private router = inject(Router)

  sidebarContent = this.sidebar.view;
  productOnReview = this.sidebar.productOnView;
  productsOnCart = this.shoppingCart.shoppingCart;
  sidebarHidden = this.sidebar.hidden;

  onCheckout() {
    if (this.productsOnCart().length >= 1) {
      this.closeSidebar();
      this.router.navigate(['/checkout']);
    }
  }

  closeSidebar() {
    this.sidebarHidden.set(true);
  }
}
