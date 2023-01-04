import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/dtos/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderDto);
  }

  @Get('/')
  async getOrders() {
    return await this.orderService.getOrders();
  }
}
