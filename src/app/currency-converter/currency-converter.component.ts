import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  cur1 = 1;
  cur2 = 0.03;
  rate = 0.03;
  currencies = [
    { value: 'UAH', name: 'Ukrainian hryvnia' },
    { value: 'USD', name: 'United States Dollar' },
    { value: 'EUR', name: 'Euro' },
    { value: 'GBP', name: 'Pound sterling' },
  ];
  currencyPair = ['UAH', 'EUR'];
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.currencyService.getRates(this.currencyPair).subscribe((resp) => {
      this.rate = Number(resp);
      this.onValueChange();
    });
  }

  public onValueChange() {
    this.cur2 = +(this.cur1 * this.rate).toFixed(2);
  }

  public onValue2Change() {
    this.cur1 = +(this.cur2 / this.rate).toFixed(2);
  }

  public onCurrencyChange() {
    this.getRates();
  }
}
