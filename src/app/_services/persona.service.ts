import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../_models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>("https://cursoangularapi2020.herokuapp.com/persona");
  }

}
