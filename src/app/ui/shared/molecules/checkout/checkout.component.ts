import { Component, Input, Output, EventEmitter, signal, SimpleChanges } from '@angular/core';
import { CurrencyPipe} from '@angular/common';
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
  total = signal<number>(0);

  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnChanges(changes: SimpleChanges){
    const productsChanged = changes['checkoutProducts']

    if(productsChanged){
      this.total.set(getTotalFromProducts(this.checkoutProducts))
    }
  }

  deleteProduct(itemId: number): void {
    this.shoppingCart.deleteItem(itemId);
  }

  onCheckout() {
    this.checkout.emit(true);
  }
}
