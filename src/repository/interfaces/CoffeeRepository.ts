import { Coffee } from 'src/models/Coffee';

export abstract class CoffeeRepository {
  abstract getCoffees(): Promise<Coffee[]>;
  abstract createBatchCoffee(coffees: Coffee[]): Promise<void>;
}
