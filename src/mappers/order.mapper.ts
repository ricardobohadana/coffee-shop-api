import { Injectable } from '@nestjs/common';
import { Order, OrderProduct } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { CreateOrderDto } from 'src/dtos/order.dto';
import { OrderModel } from 'src/models/OrderModel';

interface OrderFromDto {
  order: Order;
  orderProducts: OrderProduct[];
}

@Injectable()
export class OrderMapper {
  fromDatabase(object: Order): OrderModel {
    const model = new OrderModel();

    model.id = object.id;
    model.zipCode = object.zipCode;
    model.street = object.street;
    model.number = object.number;
    model.moreInfo = object.moreInfo ?? null;
    model.district = object.district;
    model.city = object.city;
    model.state = object.state;
    model.paymentMethod = object.paymentMethod;
    model.deliveryFee = Number(object.deliveryFee);
    return model;
  }

  toDatabase(model: OrderModel): Order {
    const object = {} as Order;
    object.id = model.id;
    object.zipCode = model.zipCode;
    object.street = model.street;
    object.number = model.number;
    object.moreInfo = model.moreInfo ?? null;
    object.district = model.district;
    object.city = model.city;
    object.state = model.state;
    object.paymentMethod = model.paymentMethod;
    object.deliveryFee = new Decimal(model.deliveryFee);
    return object;
  }

  fromDto(dto: CreateOrderDto): OrderFromDto {
    const object = {} as Order;
    object.zipCode = dto.zipCode;
    object.street = dto.street;
    object.number = dto.number;
    object.moreInfo = dto.moreInfo ?? null;
    object.district = dto.district;
    object.city = dto.city;
    object.state = dto.state;
    object.paymentMethod = dto.paymentMethod;
    object.deliveryFee = new Decimal(dto.deliveryFee);
    const products = [];

    dto.orderProducts.forEach((p) => {
      products.push({
        coffeeId: p.coffeeId,
        amount: p.amount,
      });
    });

    return { order: object, orderProducts: products };
  }
}
