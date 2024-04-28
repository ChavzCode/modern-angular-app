import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingBag } from '@ng-icons/heroicons/outline';

import { CategoryUseCase } from '../../../../domain/usecases/category.usecase';
import { Category } from '../../../../domain/models/category/category';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  providers: [provideIcons({ heroShoppingBag })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  categories = signal<Array<Category>>([]);
  productsNumber = signal<Number>(0);

  constructor(
    private _categoryUseCase: CategoryUseCase,
    private sidebar: SidebarService,
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit() {
    this._categoryUseCase.getAllCategories().subscribe({
      next: (res) => {
        this.categories.set(res.slice(0, 5));
      },
    });
    this.itemCount();
  }

  itemCount() {
    this.shoppingCart.shoppingCart$.subscribe({
      next: (a) => {
        this.productsNumber.set(a.length);
      },
    });
  }

  openSidebar() {
    this.sidebar.setCurrentView('cart');
  }
}
