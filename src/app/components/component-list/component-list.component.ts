import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { Species } from 'src/app/models/species.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

const animation = trigger('animation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('250ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [animation],
})
export class ComponentListComponent implements OnInit {
  showCards: boolean;
  pokemons: Pokemon[] = [];

  displayedColumns: string[] = ['id', 'name'];

  isLoading: boolean;

  constructor(private pokemonsService: PokemonsService) {
    this.isLoading = true;
    this.showCards = true;
    this.disabledScroll();
  }

  ngOnInit(): void {
    this.pokemonsService.getAllPokemon().subscribe((pokemons) => {
      if (pokemons) {
        this.mapData(pokemons.results);
        this.isLoading = false;
        this.disabledScroll();
      }
    });
  }

  changeViewCard(): void {
    this.showCards = true;
  }

  changeViewTable(): void {
    this.showCards = false;
  }

  disabledScroll(): void {
    const body = document.querySelector('body');

    if (this.isLoading) {
      if (body !== null) body.style.overflow = 'hidden';
    } else {
      if (body !== null) body.style.overflow = 'auto';
    }
  }

  mapData(species: Species[]): void {
    species.map((p) => {
      const str = p.url.split('/');
      const pokemon: Pokemon = {
        id: str[6],
        species: {
          name: p.name,
          url: p.url,
        },
      };
      this.pokemons.push(pokemon);
    });
  }
}
