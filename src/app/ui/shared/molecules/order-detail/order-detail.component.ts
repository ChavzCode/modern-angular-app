import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDoubleRight } from '@ng-icons/heroicons/outline';

import { Order } from '../../../../domain/models/order/order';
import { getTotalFromProducts } from '../../../core/utils/getTotalFromProducts';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, NgIconComponent],
  providers: [provideIcons({ heroChevronDoubleRight })],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent {
  @Output() onGoRight = new EventEmitter<boolean>(false);
  @Input({ required: true }) order: Order = {
    id: 0,
    products: [],
    date: new Date(),
    userId: '',
  };

  getTotal(): number {
    return getTotalFromProducts(this.order.products);
  }

  onRight() {
    this.onGoRight.emit(true);
  }
}
