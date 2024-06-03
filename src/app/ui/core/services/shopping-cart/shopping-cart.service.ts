import { Injectable, signal } from '@angular/core';;

import { Product } from '@domain/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCart = signal<Product[]>([]);

  addNewItem(item: Product) {
    this.shoppingCart.update((prod) => [...prod, item]);
  }

  deleteItem(itemId: number) {
    this.shoppingCart.update((prod) =>
      prod.filter((item) => item.id != itemId)
    );
  }

  emptyCar() {
    this.shoppingCart.set([]);
  }
}
