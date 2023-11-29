import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() avgTemps: Array<number> = [];

  constructor() {}

  ngOnInit() {}
}
