import { Sprites } from './sprites.interface';

export interface Pokemon {
  id?: string;
  species: {
    name: string;
    url: string;
  };
  weight?: number;
  base_experience?: number;
  height?: number;
  sprites?: Sprites;
  imagen?: string;
}
