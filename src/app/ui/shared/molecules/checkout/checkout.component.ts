import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroTrash } from '@ng-icons/heroicons/outline';

import { Product } from '../../../../domain/models/product/product';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { TruncateWithEllipsisPipe } from '../../../core/pipes/truncate-with-ellipsis.pipe';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe, NgIconComponent, TruncateWithEllipsisPipe],
  providers: [provideIcons({ heroTrash })],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  @Input() checkoutProducts: Product[] = [];
  @Input() stringTrimLenght: number = 20;
  @Output() checkout = new EventEmitter<boolean>(false);

  constructor(private shoppingCart: ShoppingCartService) {}

  getTotalPrice(): number {
    if (this.checkoutProducts.length > 0) {
      const total = this.checkoutProducts
        .map((i) => i.price)
        .reduce((a, b) => a + b);
      return total;
    }
    return 0;
  }

  deleteProduct(itemId: number): void {
    this.shoppingCart.deleteItem(itemId);
  }

  onCheckout() {
    this.checkout.emit(true);
  }
}
