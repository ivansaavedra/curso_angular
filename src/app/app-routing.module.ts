import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { IfscComponent } from './components/ifsc/ifsc.component';

const routes: Routes = [
  {path: 'exchange-rate' , component: ExchangeRateComponent },
  {path: 'ifsc' , component: IfscComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
