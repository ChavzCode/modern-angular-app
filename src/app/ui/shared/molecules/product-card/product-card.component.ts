import { Component, Input, inject, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Product } from '@domain/models/product/product';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { AddRemoveBtnComponent } from '../../atoms/add-remove-btn/add-remove-btn.component';
import { initProduct } from '../../../core/constants/product.constants';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AddRemoveBtnComponent, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: Product = initProduct;

  private sidebarService = inject(SidebarService);
  private shoppingCart = inject(ShoppingCartService);

  isProductInCart = computed<Boolean>(() => {
    return this.shoppingCart
      .shoppingCart()
      .some((item) => item.id === this.product.id);
  });

  selectProduct(selectedProduct: Product) {
    this.sidebarService.setCurrentView('detail');
    this.sidebarService.reviewProduct(selectedProduct);
  }

  onAddRemoveProduct(item: Product) {
    if(this.isProductInCart()){
      this.shoppingCart.deleteItem(item.id);
    }else{
      this.shoppingCart.addNewItem(item);
    }
    this.sidebarService.setCurrentView('cart');
  }

  loadAltImg() {
    this.product.images[0] = `https://placehold.co/1000?text=${this.product.title}`;
  }
}
