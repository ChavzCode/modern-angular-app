import { Product } from '../product/product';

export interface Order {
  id:       number;
  products: Product[];
  date:     Date;
  userId:   string;
}
