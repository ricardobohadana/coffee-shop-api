import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeMapper } from './mappers/coffee.mapper';
import { CoffeeRepository } from './repository/interfaces/CoffeeRepository';
import { CoffeePrismaRepository } from './repository/prisma/CoffeePrismaRepository';
import { PrismaService } from './repository/prisma/prisma.service';
import { OrderController } from './order/order.controller';
import { OrderRepository } from './repository/interfaces/OrderRepository';
import { OrderProductRepository } from './repository/interfaces/OrderProductRepository';
import { OrderPrismaRepository } from './repository/prisma/OrderPrismaRepository';
import { OrderProductPrismaRepository } from './repository/prisma/OrderProductPrismaRepository';
import { OrderProductMapper } from './mappers/orderProduct.mapper';
import { OrderService } from './order/order.service';
import { OrderMapper } from './mappers/order.mapper';

@Module({
  imports: [],
  controllers: [CoffeeController, OrderController],
  providers: [
    // repositories
    { provide: CoffeeRepository, useClass: CoffeePrismaRepository },
    { provide: OrderRepository, useClass: OrderPrismaRepository },
    { provide: OrderProductRepository, useClass: OrderProductPrismaRepository },
    // services
    CoffeeService,
    PrismaService,
    OrderService,
    // mappers
    CoffeeMapper,
    OrderProductMapper,
    OrderMapper,
  ],
})
export class AppModule {}
