import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardType: string;
  cardNumber: string;
  cardHolder: string = '';
  expiresMonth: string = '';
  expiresYear: string = '';
  isFliped: boolean;
  timeToFlip: boolean;
  cvv: string = '';
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  getCardType(e) {
    this.cardType = e;
  }
  getCardNumber(e) {
    let str = new String(e);
    let num: string = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== undefined) {
        num += str[i]
      }
    }
    let num2 = num.replace(/(\d)(?=(\d{4})+(\D|$))/g, '$1 ')
    this.cardNumber = num2;
  }
  getCardHolder(e) {
    this.cardHolder = e;
  }
  getMonth(e) {
    this.expiresMonth = e;
  }
  getYear(e) {
    this.expiresYear = e;
  }
  flipCard(e) {
    setTimeout(() => {
      this.isFliped = e
    }, 200)
    this.timeToFlip = e
  }
  getCvv(e) {
    this.cvv = e;
  }
}
