import { Observable } from "rxjs";
import { Product } from "../product";

export abstract class ProductGateway {
  abstract getByID(id: string): Observable<Product>
  abstract getAll(): Observable<Array<Product>>
}
