import { Product } from '@domain/models/product/product';

export const getTotalFromProducts = (items: Product[]) => {
  if (items.length > 0) {
    const total = items.map((i) => i.price).reduce((a, b) => a + b);
    return total;
  }
  return 0;
};
