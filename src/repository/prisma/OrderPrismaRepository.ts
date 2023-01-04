import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { CreateOrderDto } from 'src/dtos/order.dto';
import { OrderMapper } from 'src/mappers/order.mapper';
import { OrderModel } from 'src/models/OrderModel';
import { OrderRepository } from '../interfaces/OrderRepository';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrderPrismaRepository implements OrderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getOrders(): Promise<Order[]> {
    return await this.prismaService.order.findMany();
  }
  async createOrder(data: Order): Promise<Order> {
    return await this.prismaService.order.create({ data });
  }
}
