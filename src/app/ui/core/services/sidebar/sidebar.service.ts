import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../../domain/models/product/product';
import { initProduct } from '../../constants/product.constants';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarView = new BehaviorSubject<'detail' | 'cart'>('detail');
  sidebarView$ = this.sidebarView.asObservable();
  private sidebarProduct = new BehaviorSubject<Product>(initProduct);
  sidebarProduct$ = this.sidebarProduct.asObservable();

  constructor() {}

  reviewProduct(product: Product) {
    this.sidebarProduct.next(product);
  }

  setCurrentView(view: 'detail' | 'cart') {
    this.sidebarView.next(view);
  }
}
