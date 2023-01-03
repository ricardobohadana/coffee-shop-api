import { Injectable } from '@nestjs/common';
import { Coffee as CoffeeDb } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Coffee as CoffeeModel } from 'src/models/Coffee';

@Injectable()
export class CoffeeMapper {
  fromDatabase(coffee: CoffeeDb): CoffeeModel {
    const model = new CoffeeModel();
    model.id = coffee.id;
    model.price = Number(coffee.price);
    model.title = coffee.title;
    model.tags = coffee.tags;
    model.subtitle = coffee.subtitle;
    model.src = coffee.src;

    return model;
  }

  toDatabase(coffee: CoffeeModel): CoffeeDb {
    const model = {} as CoffeeDb;
    model.id = coffee.id;
    model.price = new Decimal(coffee.price);
    model.title = coffee.title;
    model.tags = coffee.tags;
    model.subtitle = coffee.subtitle;
    model.src = coffee.src;

    return model;
  }
}
