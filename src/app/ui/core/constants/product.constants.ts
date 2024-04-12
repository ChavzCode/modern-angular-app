import { Product } from '../../../domain/models/product/product';

export const initProduct: Product = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  images: [],
  creationAt: new Date(),
  updatedAt: new Date(),
  category: {
    id: 0,
    image: '',
    name: '',
    creationAt: new Date(),
    updatedAt: new Date(),
  },
};
