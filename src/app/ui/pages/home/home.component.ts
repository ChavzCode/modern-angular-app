import { Component, OnInit, signal } from '@angular/core';

import { ProductUseCase } from '../../../domain/usecases/product.usecase';
import { Product } from '../../../domain/models/product/product';
import { ProductsComponent } from '../../shared/organisms/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products = signal<Array<Product>>([]);

  constructor(private _productUseCase: ProductUseCase) {}

  ngOnInit(): void {
    this._productUseCase.getAllProducts().subscribe({
      next: (res) => {
        this.products.set(res);
      },
    });
  }
}
