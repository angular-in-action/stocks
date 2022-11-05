import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  styleUrls: ['./summary.component.css'],
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input() stock: any;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
}