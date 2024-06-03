import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '@domain/models/product/product';
import { ProductGateway } from '@domain/models/product/gateway/product.gateway';
import { enviroment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService extends ProductGateway {
  private url = enviroment.API_URL + '/products';
  private http = inject(HttpClient);

  constructor() {super();}

  getByID(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + id);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Array<Product>>(this.url);
  }

  getByCategory(id: string): Observable<Product[]> {
    return this.http.get<Array<Product>>(`${this.url}?categoryId=${id}`);
  }
}
