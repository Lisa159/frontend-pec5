import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() pokemons: Pokemon[] = [];
  constructor() {}
}
