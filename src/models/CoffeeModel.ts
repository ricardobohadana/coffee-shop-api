import { OrderProductModel } from './OrderProductModel';

export class CoffeeModel {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  price: number;
  src: string;

  orderProduct: OrderProductModel[];

  constructor() {}
}
