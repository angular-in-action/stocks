import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: Http) {}

  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

  getNewsSnapshot(source = 'the-wall-street-journal') {
    return this.http.get(service + '/stocks/news/snapshot?source=' + source);
  }
}
