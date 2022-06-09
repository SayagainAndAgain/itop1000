import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': environment.API_KEY,
    'X-RapidAPI-Host': environment.API_HOST,
  });
  currencyUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getRates(currencyPair: string[]) {
    return this.http.get(
      `${this.currencyUrl}?from=${currencyPair[0]}&to=${currencyPair[1]}`,
      {
        headers: this.headers,
      }
    );
  }
}
