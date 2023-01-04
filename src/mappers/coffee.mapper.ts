import { Injectable } from '@nestjs/common';
import { Coffee } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { CoffeeModel } from 'src/models/CoffeeModel';

@Injectable()
export class CoffeeMapper {
  fromDatabase(coffee: Coffee): CoffeeModel {
    const model = new CoffeeModel();
    model.id = coffee.id;
    model.price = Number(coffee.price);
    model.title = coffee.title;
    model.tags = coffee.tags;
    model.subtitle = coffee.subtitle;
    model.src = coffee.src;

    return model;
  }

  toDatabase(model: CoffeeModel): Coffee {
    const coffee = {} as Coffee;
    coffee.id = model.id;
    coffee.price = new Decimal(model.price);
    coffee.title = model.title;
    coffee.tags = model.tags;
    coffee.subtitle = model.subtitle;
    coffee.src = model.src;

    return coffee;
  }
}
