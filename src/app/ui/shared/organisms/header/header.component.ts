import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingBag } from '@ng-icons/heroicons/outline';

import { CategoryUseCase } from '@domain/usecases/category.usecase';
import { Category } from '@domain/models/category/category';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { enviroment } from '../../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  providers: [provideIcons({ heroShoppingBag })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private _categoryUseCase = inject(CategoryUseCase);
  private shoppingCart = inject(ShoppingCartService);
  private sidebar = inject(SidebarService);

  authOn: boolean = enviroment.auth_on;
  categories = signal<Array<Category>>([]);
  productsNumber = this.shoppingCart.shoppingCart;

  ngOnInit() {
    this._categoryUseCase.getAllCategories().subscribe({
      next: (res) => {
        this.categories.set(res.slice(0, 5));
      },
    });
  }

  openSidebar() {
    this.sidebar.setCurrentView('cart');
  }
}
