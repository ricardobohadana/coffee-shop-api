import { Injectable } from '@nestjs/common';
import { CoffeeMapper } from 'src/mappers/coffee.mapper';
import { Coffee } from 'src/models/Coffee';
import { CoffeeRepository } from '../interfaces/CoffeeRepository';
import { PrismaService } from './prisma.service';

@Injectable()
export class CoffeePrismaRepository implements CoffeeRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly coffeeMapper: CoffeeMapper,
  ) {}

  async createBatchCoffee(coffees: Coffee[]): Promise<void> {
    await this.prismaService.coffee.createMany({
      data: coffees,
    });
  }

  async getCoffees(): Promise<Coffee[]> {
    const coffees = await this.prismaService.coffee.findMany();
    const model = coffees.map(this.coffeeMapper.fromDatabase);
    return model;
  }
}
