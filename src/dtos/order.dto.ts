import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  NotEquals,
} from 'class-validator';

export class OrderProductDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  coffeeId: string;

  @IsInt()
  @NotEquals(0)
  amount: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsOptional()
  @IsString()
  moreInfo?: string;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNumber()
  deliveryFee: number;

  @IsArray()
  @ArrayNotEmpty()
  orderProducts: OrderProductDto[];
}
