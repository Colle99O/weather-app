import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentCity: string | null = null;
  currentTemp: number | null = null;
  avgTemps: Array<number> = [];

  async onSendQuery(event: any) {
    const city = event.value;

    let url = 'https://api.open-meteo.com/v1/forecast';

    url += `?latitude=${city.latitude}`;
    url += `&longitude=${city.longitude}`;
    url += `&current=temperature_2m,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum&timezone=GMT&forecast_days=4`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      this.currentCity = city.name;
      this.currentTemp = data.current.temperature_2m;

      this.avgTemps = data.daily.temperature_2m_max.map(
        (temp: number, index: number) => {
          return ((temp + data.daily.temperature_2m_min[index]) / 2).toFixed(1);
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
}
