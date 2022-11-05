import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  private stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
  private service: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get() {
    return this.stocks;
  }

  add(stock: string) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]) {
    return this.http.get<Array<StockInterface>>(this.service + '/stocks/snapshot?symbols=' + symbols.join());
  }
}