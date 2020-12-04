import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/_models/exchange_rate';
import { ExchangeRateService } from 'src/app/_services/exchange-rate.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  exchange_rate: ExchangeRate;
  formulario: FormGroup;

  loading = false;

  constructor(private exchange_rate_sercie: ExchangeRateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      rate: ['', Validators.required]
    });
    $("#rate").focus();
    this.getExchangeRate("USD");
  }

  getExchangeRate(rate: string){
    this.loading = true;
    this.exchange_rate = new ExchangeRate();
    this.exchange_rate_sercie.getExchangeRate(rate).subscribe(
      res => {
        this.exchange_rate = res;
        console.log(this.exchange_rate);
        this.loading = false;
      },
      err => console.error(err)
    );
  }

  ngSubmit(){
    var rate = this.formulario.controls['rate'].value;
    this.getExchangeRate(rate);
  }
}
