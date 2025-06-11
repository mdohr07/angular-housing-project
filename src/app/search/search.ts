import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class Search {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>(); 
  cards: any;
  housingService: any;
  // @Output erzeugt ein eigenes Event namens search, das den Begriff nach außen weitergibt

  onSearch() {
    this.cards = this.housingService.getAllHousingLocations(this.searchTerm);
  }
}
