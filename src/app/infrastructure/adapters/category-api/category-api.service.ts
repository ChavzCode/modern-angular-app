import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../../../domain/models/category/category';
import { CategoryGateway } from '../../../domain/models/category/gateway/category.gateway';
import { enviroment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService extends CategoryGateway {
  private categoryURL = enviroment.API_URL + '/categories';

  constructor(private http: HttpClient) {super();}

  getAll(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.categoryURL);
  }

  getById(): Observable<Category> {
    return this.http.get<Category>(this.categoryURL);
  }
}
