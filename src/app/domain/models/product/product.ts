import { Category } from "../category/category"

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
  category:    Category;
}
