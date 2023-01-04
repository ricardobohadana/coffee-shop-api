import { Injectable } from '@nestjs/common';
import { v4 as randomUUID } from 'uuid';
import { CreateCoffeeDto } from 'src/dtos/coffee.dto';
import { CoffeeModel } from 'src/models/CoffeeModel';
import { CoffeeRepository } from 'src/repository/interfaces/CoffeeRepository';

@Injectable()
export class CoffeeService {
  constructor(private readonly coffeeRepository: CoffeeRepository) {}

  async createBatchCoffees(coffeesDto: CreateCoffeeDto[]) {
    const coffees = coffeesDto.map((c) => {
      const coffee = new CoffeeModel();
      coffee.price = c.price;
      coffee.src = c.img;
      coffee.subtitle = c.subtitle;
      coffee.tags = c.tags;
      coffee.title = c.title;
      return coffee;
    });
    await this.coffeeRepository.createBatchCoffee(coffees);

    return;
  }

  async getCoffees() {
    return await this.coffeeRepository.getCoffees();
  }
}
