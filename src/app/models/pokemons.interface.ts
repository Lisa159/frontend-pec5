import { Species } from './species.interface';

export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: Species[];
}
