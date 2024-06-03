import { Component, Input } from '@angular/core';

import { Product } from '@domain/models/product/product';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products: Product[] = [];
}
