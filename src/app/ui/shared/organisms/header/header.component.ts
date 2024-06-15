import { Component, signal, inject, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingBag, heroBars3 } from '@ng-icons/heroicons/outline';

import { CategoryUseCase } from '@domain/usecases/category.usecase';
import { Category } from '@domain/models/category/category';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { enviroment } from '../../../../../environments/environment';
import { dropdown } from '../../../core/animations/hideRight';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterLink, RouterLinkActive, NgClass],
  providers: [provideIcons({ heroShoppingBag, heroBars3 })],
  animations: [dropdown],
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
  dropdown: boolean = false;

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

  toggleNavigation() {
    this.dropdown = !this.dropdown;
  }
}
