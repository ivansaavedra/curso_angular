import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/_models/exchange_rate';
import { ExchangeRateService } from 'src/app/_services/exchange-rate.service';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  exchange_rate: ExchangeRate;

  constructor(private exchange_rate_sercie: ExchangeRateService) { }

  ngOnInit(): void {
    this.getExchangeRate();
  }

  getExchangeRate(){
    this.exchange_rate = new ExchangeRate();
    this.exchange_rate_sercie.getExchangeRate().subscribe(
      res => {
        this.exchange_rate = res;
        console.log(this.exchange_rate);
      },
      err => console.error(err)
    );
  }


}
