import { OrderProduct } from '@prisma/client';

export abstract class OrderProductRepository {
  abstract getOrderProductsByOrderId(id: string): Promise<OrderProduct[]>;
  abstract createOrderProducts(data: OrderProduct[]): Promise<number>;
}
