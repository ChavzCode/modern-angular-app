import { Observable } from "rxjs";

import { Category } from "../category";

export abstract class CategoryGateway {
  abstract getAll(): Observable<Array<Category>>
  abstract getById(id: number): Observable<Category>
}
