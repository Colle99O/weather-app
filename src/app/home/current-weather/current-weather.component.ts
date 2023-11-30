import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() temp: number | null = null;
  @Input() city: string | null = null;

  weatherCondition: string = ''; // Deklaracja zmiennej przechowującej warunki pogodowe

  constructor() {}

  ngOnInit() {
    this.weatherConditions(); // Wywołanie funkcji ustawiającej warunki pogodowe
  }

  weatherConditions() {
    this.weatherCondition = 'sunny'; // Przypisanie wartości 'sunny' do zmiennej weatherCondition
  }
}