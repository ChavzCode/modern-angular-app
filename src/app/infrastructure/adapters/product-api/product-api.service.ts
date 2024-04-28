import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductGateway } from '../../../domain/models/product/gateway/product.gateway';
import { Product } from '../../../domain/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ProductGateway {
  private url = 'https://api.escuelajs.co/api/v1/products'

  constructor(private http: HttpClient) {super();}

  getByID(id: string): Observable<Product>{
    return this.http.get<Product>(this.url+id)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Array<Product>>(this.url);
  }

  getByCategory(id: string): Observable<Product[]>{
    return this.http.get<Array<Product>>(`${this.url}?categoryId=${id}`);
  }
}
