import { Injectable } from '@nestjs/common';
import { CoffeeMapper } from 'src/mappers/coffee.mapper';
import { CoffeeModel } from 'src/models/CoffeeModel';
import { CoffeeRepository } from '../interfaces/CoffeeRepository';
import { PrismaService } from './prisma.service';

@Injectable()
export class CoffeePrismaRepository implements CoffeeRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly coffeeMapper: CoffeeMapper,
  ) {}

  async createBatchCoffee(coffees: CoffeeModel[]): Promise<void> {
    await this.prismaService.coffee.createMany({
      data: coffees,
    });
  }

  async getCoffees(): Promise<CoffeeModel[]> {
    const coffees = await this.prismaService.coffee.findMany();
    const model = coffees.map(this.coffeeMapper.fromDatabase);
    return model;
  }
}
