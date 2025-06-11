import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './logo/logo';
import { Card } from './card/card';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card, Logo, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  cards = [
    {
      title: 'Tolle Bude',
      imageUrl: '',
      description: ''
    },
    {
      title: 'Netter Schuppen',
      imageUrl: '',
      description: ''
    },
    {
      title: 'Schnieke Hütte',
      imageUrl: '',
      description: ''
    }
  ];
}
