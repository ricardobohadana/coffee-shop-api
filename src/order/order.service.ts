import { Injectable } from '@nestjs/common';
import { v4 as randomUUID } from 'uuid';
import { OrderRepository } from 'src/repository/interfaces/OrderRepository';
import { OrderModel } from 'src/models/OrderModel';
import { CreateOrderDto } from 'src/dtos/order.dto';
import { OrderProductRepository } from 'src/repository/interfaces/OrderProductRepository';
import { OrderMapper } from 'src/mappers/order.mapper';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderMapper: OrderMapper,
    private readonly orderProductRepository: OrderProductRepository,
  ) {}

  async createOrder(orderDto: CreateOrderDto) {
    const { order, orderProducts } = this.orderMapper.fromDto(orderDto);
    const Order = await this.orderRepository.createOrder(order);
    const toInputOrderProducts = orderProducts.map((p) => ({
      ...p,
      orderId: Order.id,
    }));
    const countOfInsertedOrderProducts =
      await this.orderProductRepository.createOrderProducts(
        toInputOrderProducts,
      );
    return Order.id && countOfInsertedOrderProducts === orderProducts.length;
  }

  async getOrders() {
    return await this.orderRepository.getOrders();
  }
}
