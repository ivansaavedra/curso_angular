import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { IfscComponent } from './components/ifsc/ifsc.component';
import { LayoutModule } from '../app/layout/layout.module';
import { PersonaComponent } from './components/persona/persona.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { InterceptorService } from './_services/interceptor.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    IfscComponent,
    PersonaComponent,
    EmpleadoComponent,
    PersonaDetalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
