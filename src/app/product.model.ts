export enum TypeProduct {
  Base = 1,
  Sale = 2,
  Hit = 3,
  BestSeller = 4
}

export interface Product {
  id: number;
  name: string;
  price: number;
  type: TypeProduct;
}