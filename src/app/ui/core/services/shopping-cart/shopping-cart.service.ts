import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../../domain/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart = new BehaviorSubject<Product[]>([]);
  shoppingCart$ = this.shoppingCart.asObservable();

  constructor() {}

  getCart() {
    return this.shoppingCart.value;
  }

  arrangeItem(item: Product): boolean {
    const inShoppingCart =
      this.shoppingCart.value.filter((a) => a.id === item.id).length > 0;

    if (inShoppingCart) {
      this.deleteItem(item.id);
      return false;
    } else {
      this.addNewItem(item);
      return true;
    }
  }

  addNewItem(item: Product) {
    const newCart = this.shoppingCart.value;
    newCart.push(item);
    this.shoppingCart.next(newCart);
  }

  deleteItem(itemId: number) {
    const newCart = this.shoppingCart.value.filter((item) => item.id != itemId);
    this.shoppingCart.next(newCart);
  }

}
