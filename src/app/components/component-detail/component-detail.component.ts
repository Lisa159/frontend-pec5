import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  pokemon: Pokemon;

  textDetails: string = 'Show all details';

  isShownDetails: boolean;

  constructor(
    private pokemonsService: PokemonsService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.pokemon = {
      id: '',
      species: {
        name: '',
        url: '',
      },
      height: 0,
      weight: 0,
      base_experience: 0,
      sprites: {
        front_default: '',
        other: {
          'official-artwork': {
            front_default: '',
          },
        },
      },
    };

    this.isShownDetails = false;
  }

  ngOnInit(): void {
    let identifier = this.activateRoute.snapshot.paramMap.get('id');
    if (identifier === null) identifier = '0';
    this.pokemonsService.getPokemonById(identifier).subscribe((pokemon) => {
      if (!pokemon) {
        return this.router.navigateByUrl('/');
      }
      this.mapData(pokemon);
      return;
    });
  }

  showDetails(): void {
    if (this.isShownDetails) {
      this.textDetails = 'Show all details';
    } else {
      this.textDetails = 'Hide all details';
    }
    this.isShownDetails = !this.isShownDetails;
  }

  mapData(pokemon: Pokemon) {
    this.pokemon.id = pokemon.id;
    this.pokemon.species.name = pokemon.species.name;
    this.pokemon.species.url = pokemon.species.url;
    this.pokemon.height = pokemon.height;
    this.pokemon.weight = pokemon.weight;
    this.pokemon.base_experience = pokemon.base_experience;
    this.pokemon.sprites = pokemon.sprites;
    this.pokemon.imagen =
      pokemon.sprites?.other['official-artwork'].front_default;
  }
}
