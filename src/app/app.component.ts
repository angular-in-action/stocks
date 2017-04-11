import { Component } from '@angular/core';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(service: StocksService) {
    service.load(['AAPL'])
    .subscribe(stocks => {
      console.log(stocks.json());
    });
  }
}
