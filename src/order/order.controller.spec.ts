import { Test, TestingModule } from '@nestjs/testing';
import { OrderMapper } from '../mappers/order.mapper';
import { OrderProductMapper } from '../mappers/orderProduct.mapper';
import { OrderModel } from '../models/OrderModel';
import { OrderProductRepository } from '../repository/interfaces/OrderProductRepository';
import { OrderRepository } from '../repository/interfaces/OrderRepository';
import { OrderPrismaRepository } from '../repository/prisma/OrderPrismaRepository';
import { OrderProductPrismaRepository } from '../repository/prisma/OrderProductPrismaRepository';
import { PrismaService } from '../repository/prisma/prisma.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      imports: [OrderModel],
      providers: [
        // repositories
        { provide: OrderRepository, useClass: OrderPrismaRepository },
        {
          provide: OrderProductRepository,
          useClass: OrderProductPrismaRepository,
        },
        // services
        PrismaService,
        OrderService,
        // mappers
        OrderProductMapper,
        OrderMapper,
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
