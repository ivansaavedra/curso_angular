import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { IfscComponent } from './components/ifsc/ifsc.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {path: 'exchange-rate' , component: ExchangeRateComponent },
  {path: 'ifsc' , component: IfscComponent },
  {path: 'persona' , component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
