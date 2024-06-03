import { Injectable, signal } from '@angular/core';

import { Product } from '../../../../domain/models/product/product';
import { initProduct } from '../../constants/product.constants';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  hidden = signal<Boolean>(true);
  view = signal<'detail' | 'cart'>('detail');
  productOnView = signal<Product>(initProduct);

  reviewProduct(product: Product) {
    this.productOnView.set(product);
  }

  setCurrentView(view: 'detail' | 'cart') {
    this.hidden.set(false);
    this.view.set(view);
  }
}
