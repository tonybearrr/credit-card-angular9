import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Month, Year } from 'src/app/models/models';


@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  @Output() cardType = new EventEmitter();
  @Output() numberOfCard = new EventEmitter();
  @Output() cardHolder = new EventEmitter();
  @Output() expiresMonth = new EventEmitter();
  @Output() expiresYear = new EventEmitter();
  @Output() cvv = new EventEmitter();
  @Output() flip = new EventEmitter();
  @ViewChild('num') numInput: ElementRef;
  leters: RegExp = /[A-Z a-z]/;
  cardNum: RegExp = /(\d)(?=(\d{4})+(\D|$))/;
  cardCvv: RegExp = /[0-9]/;
  cvvData

  cardNumberData = '';

  dateValue;
  selectedMonthData;
  selectedYearData;
  holderData;
  cvvv;
  monthes: Month[] = [
    { month: '01', code: 'Jan' },
    { month: '02', code: 'Feb' },
    { month: '03', code: 'Mar' },
    { month: '04', code: 'Apr' },
    { month: '05', code: 'May' },
    { month: '06', code: 'Jun' },
    { month: '07', code: 'Jul' },
    { month: '08', code: 'Aug' },
    { month: '09', code: 'Sep' },
    { month: '10', code: 'Oct' },
    { month: '11', code: 'Nov' },
    { month: '12', code: 'Dec' }
  ];
  years: Year[] = []
  constructor() { }
  ngOnInit(): void {
    if (!this.cardNumberData) {
      this.cardNumberData = '';
    }
    for (let i = 0; i <= 10; i++) {
      this.years.push({ year: +new Date().getFullYear().toString().substr(-2) + i });
    }
  }
  flipCard(trigger: boolean) {
    this.flip.emit(trigger)
  }
  setHolder(val) {
    this.cardHolder.emit(val);

  }
  setCardNumber(e) {
    this.numberOfCard.emit(this.cardNumberData)
  }
  setYear(e) {
    this.expiresYear.emit(e.value.year)
  }
  setMonth(e) {
    this.expiresMonth.emit(e.value.month)
  }
  setCvv(e) {
    this.cvv.emit(e.target.value);
  }
  getCardType(value) {
    let number = this.cardNumberData;
    if (number !== undefined) {
      let re = new RegExp("^4");
      if (number.match(re) != null) return this.cardType.emit("visa");

      re = new RegExp("^5");
      if (number.match(re) != null) return this.cardType.emit("mastercard");
    }

  }
  submitForm() {
    let data = {
      cardNumber: this.cardNumberData,
      cardHolder: this.holderData,
      expiresMonth: this.selectedMonthData.month,
      expiresYear: this.selectedYearData.year.toString(),
      cvv: this.cvvData
    }
    console.log(data);
  }

}
