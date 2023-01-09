import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';
import { Pokemons } from '../models/pokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemons> {
    return this.http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonById(id: String): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      'https://pokeapi.co/api/v2/pokemon/' + id + '/'
    );
  }
}
