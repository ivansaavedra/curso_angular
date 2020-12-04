import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from '../_models/exchange_rate';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  getExchangeRate(rate: string){
    return this.http.get<ExchangeRate>("https://api.exchangerate-api.com/v4/latest/" + rate);
  }
}
