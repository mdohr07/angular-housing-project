import { Component, Input } from '@angular/core';
import { Housinglocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() housingLocation!: Housinglocation;
  // @Input() title!: string;
  // @Input() imageUrl!: string;
  // @Input() description!: string;
  }
