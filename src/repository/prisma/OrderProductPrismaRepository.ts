import { Injectable } from '@nestjs/common';
import { OrderProduct, Prisma, PrismaPromise } from '@prisma/client';
import { OrderProductMapper } from 'src/mappers/orderProduct.mapper';
import { OrderProductModel } from 'src/models/OrderProductModel';
import { OrderProductRepository } from '../interfaces/OrderProductRepository';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrderProductPrismaRepository implements OrderProductRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly orderProductMapper: OrderProductMapper,
  ) {}

  async createOrderProducts(data: OrderProduct[]): Promise<number> {
    return (await this.prismaService.orderProduct.createMany({ data })).count;
  }
  async getOrderProductsByOrderId(
    orderId: string,
  ): Promise<OrderProductModel[]> {
    const orders = await this.prismaService.orderProduct.findMany({
      where: {
        orderId,
      },
    });

    return orders.map((order) => this.orderProductMapper.fromDatabase(order));
  }
}
