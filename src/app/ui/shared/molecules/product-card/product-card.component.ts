import { Component, Input } from '@angular/core';

import { Product } from '../../../../domain/models/product/product';
import { AddRemoveBtnComponent } from '../../atoms/add-remove-btn/add-remove-btn.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AddRemoveBtnComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    creationAt: new Date,
    updatedAt: new Date,
    category: {
      id: 0,
      image: '',
      name: '',
      creationAt: new Date,
      updatedAt: new Date
    }
  }

  ngOnInit(){

  }
}
