import { Injectable } from '@nestjs/common';
import { OrderProduct } from '@prisma/client';
import { OrderProductModel } from 'src/models/OrderProductModel';

@Injectable()
export class OrderProductMapper {
  fromDatabase(object: OrderProduct): OrderProductModel {
    const model = new OrderProductModel();
    model.amount = object.amount;
    model.coffeeId = object.coffeeId;
    model.id = object.id;
    model.orderId = object.orderId;

    return model;
  }
}
