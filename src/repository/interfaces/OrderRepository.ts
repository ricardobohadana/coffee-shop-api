import { Order } from '@prisma/client';

export abstract class OrderRepository {
  abstract getOrders(): Promise<Order[]>;
  abstract createOrder(data: Order): Promise<Order>;
}
