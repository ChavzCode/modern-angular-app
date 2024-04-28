import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../domain/models/product/product';
import { ProductsComponent } from '../../shared/organisms/products/products.component';
import { ProductUseCase } from '../../../domain/usecases/product.usecase';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  productsByCategory = signal<Product[]>([]);

  constructor(
    private _productUseCase: ProductUseCase,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((par) => {
          const categoryId = par['id'];
          return this._productUseCase.getByCategory(categoryId);
        })
      )
      .subscribe({
        next: (res) => {
          this.productsByCategory.set(res);
        },
      });
  }
}
