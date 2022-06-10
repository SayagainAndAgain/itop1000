import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencyUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something went wrong.'));
  }

  getRates(currencyPair: string[]) {
    return this.http
      .get(`${this.currencyUrl}${currencyPair[0]}/${currencyPair[1]}`)
      .pipe(catchError(this.handleError));
  }
}
