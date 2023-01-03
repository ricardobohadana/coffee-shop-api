import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeMapper } from './mappers/coffee.mapper';
import { CoffeeRepository } from './repository/interfaces/CoffeeRepository';
import { CoffeePrismaRepository } from './repository/prisma/CoffeePrismaRepository';
import { PrismaService } from './repository/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [
    {
      provide: CoffeeRepository,
      useClass: CoffeePrismaRepository,
    },
    CoffeeService,
    CoffeeMapper,
    PrismaService,
  ],
})
export class AppModule {}
