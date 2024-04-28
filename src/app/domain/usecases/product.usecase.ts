import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ProductGateway } from "../models/product/gateway/product.gateway";
import { Product } from "../models/product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductUseCase {
  constructor(private _productGateway: ProductGateway){}

  getById(id: string): Observable<Product>{
    return this._productGateway.getByID(id);
  }

  getAllProducts(): Observable<Array<Product>>{
    return this._productGateway.getAll();
  }

  getByCategory(id: string): Observable<Array<Product>>{
    return this._productGateway.getByCategory(id);
  }
}
