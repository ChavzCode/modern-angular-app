import { Component, Input } from '@angular/core';

import { Product } from '@domain/models/product/product';
import { initProduct } from '../../../core/constants/product.constants';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product: Product = initProduct;
}
