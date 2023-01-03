import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateCoffeeRequest } from 'src/dtos/coffee.dto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Get('/')
  async getCoffees() {
    return await this.coffeeService.getCoffees();
  }

  @Post('/coffees')
  async postCoffees(
    @Body() coffeesReq: CreateCoffeeRequest,
    @Res() res: Response,
  ) {
    await this.coffeeService.createBatchCoffees(coffeesReq.coffees);
    return res.sendStatus(201);
  }
}
