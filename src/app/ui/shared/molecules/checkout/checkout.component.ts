import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroTrash } from '@ng-icons/heroicons/outline';

import { Product } from '../../../../domain/models/product/product';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { TruncateWithEllipsisPipe } from '../../../core/pipes/truncate-with-ellipsis.pipe';
import { getTotalFromProducts } from '../../../core/utils/getTotalFromProducts';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe, NgIconComponent, TruncateWithEllipsisPipe],
  providers: [provideIcons({ heroTrash })],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  @Input({required: true}) checkoutProducts: Product[] = [];
  @Input() stringTrimLenght: number = 20;
  @Input() buttonText: string = 'Checkout'
  @Output() checkout = new EventEmitter<boolean>(false);

  constructor(private shoppingCart: ShoppingCartService) {}

  getTotalPrice(): number {
    return getTotalFromProducts(this.checkoutProducts);
  }

  deleteProduct(itemId: number): void {
    this.shoppingCart.deleteItem(itemId);
  }

  onCheckout() {
    this.checkout.emit(true);
  }
}
