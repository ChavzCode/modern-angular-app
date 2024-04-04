import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryGateway } from '../models/category/gateway/category.gateway';
import { Category } from '../models/category/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryUseCase {
  constructor(private _categoryGateway: CategoryGateway) {}

  getAllCategories(): Observable<Array<Category>> {
    return this._categoryGateway.getAll();
  }

  getCategoryById(id: number): Observable<Category> {
    return this._categoryGateway.getById(id);
  }
}
