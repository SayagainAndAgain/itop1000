import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'itop1000';
  usdRate = '';
  eurRate = '';

  constructor(private currencyService: CurrencyService) {}
  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.currencyService
      .getRates(['USD', 'UAH'])
      .subscribe(
        (resp: any) => (this.usdRate = Number(resp.conversion_rate).toFixed(2))
      );
    this.currencyService
      .getRates(['EUR', 'UAH'])
      .subscribe(
        (resp: any) => (this.eurRate = Number(resp.conversion_rate).toFixed(2))
      );
  }
}
