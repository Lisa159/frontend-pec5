import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon: Pokemon = {
    id: '',
    species: {
      name: '',
      url: '',
    },
  };

  constructor() {}
}
