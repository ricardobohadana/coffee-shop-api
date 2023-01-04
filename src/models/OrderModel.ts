import { OrderProductModel } from './OrderProductModel';

export class OrderModel {
  id: string;
  zipCode: string;
  street: string;
  number: string;
  moreInfo?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: string;
  deliveryFee: number;

  orderProduct: OrderProductModel[];

  constructor() {}
}
