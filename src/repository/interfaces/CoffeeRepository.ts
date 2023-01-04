import { CoffeeModel } from 'src/models/CoffeeModel';

export abstract class CoffeeRepository {
  abstract getCoffees(): Promise<CoffeeModel[]>;
  abstract createBatchCoffee(coffees: CoffeeModel[]): Promise<void>;
}
