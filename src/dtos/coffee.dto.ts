import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
} from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  subtitle: string;

  @IsNotEmptyObject()
  tags: string[];

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  img: string;
}

export class CreateCoffeeRequest {
  @IsNotEmpty()
  @IsArray()
  coffees: CreateCoffeeDto[];
}
