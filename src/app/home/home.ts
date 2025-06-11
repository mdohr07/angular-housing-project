import { Component, inject } from '@angular/core';
import { HousingService } from '../housing-service';
import { Housinglocation } from '../interfaces/housinglocation';
import { Card } from '../card/card';
import { Search } from '../search/search';
import { CommonModule } from '@angular/common';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card, Search, CommonModule, Logo], // <-- Hier ist Search dabei
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private housingService = inject(HousingService);
  cards: Housinglocation[] = [];

  constructor() {
    this.cards = this.housingService.getAllHousingLocations();
  }

  updateSearch(term: string) {
    this.cards = this.housingService.getAllHousingLocations(term);
  }
}
