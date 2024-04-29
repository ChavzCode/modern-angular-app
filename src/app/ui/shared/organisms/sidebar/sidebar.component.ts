import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, skip, switchMap, tap } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline';

import { Product } from '../../../../domain/models/product/product';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { ProductDetailComponent } from '../../molecules/product-detail/product-detail.component';
import { CheckoutComponent } from '../../molecules/checkout/checkout.component';
import { initProduct } from '../../../core/constants/product.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ProductDetailComponent, CheckoutComponent, NgIconComponent],
  providers: [provideIcons({ heroXMark })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarHidden = signal<Boolean>(true);
  sidebarContent = signal<'detail' | 'cart'>('detail');

  product = signal<Product>(initProduct);
  shoppingCart = signal<Product[]>([]);

  constructor(
    private sidebarService: SidebarService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sidebarContent$()
      .pipe(skip(1))
      .subscribe({
        next: (res) => {
          this.sidebarHidden.set(false);
          if (this.sidebarContent() === 'detail') {
            this.product.set(res);
          } else {
            this.shoppingCart.set(res);
          }
        },
      });
  }

  sidebarContent$(): Observable<any> {
    return this.sidebarService.sidebarView$.pipe(
      tap({
        next: (res) => {
          this.sidebarContent.set(res);
        },
      }),
      switchMap((result) => {
        return result === 'detail'
          ? this.sidebarService.sidebarProduct$
          : this.shoppingCartService.shoppingCart$;
      })
    );
  }

  onCheckout() {
    if (this.shoppingCart().length >= 1) {
      this.closeSidebar();
      this.router.navigate(['/checkout']);
    }
  }

  closeSidebar() {
    this.sidebarHidden.set(true);
  }
}
