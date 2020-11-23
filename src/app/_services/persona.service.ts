import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../_models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  API_URL = "https://cursoangularapi2020.herokuapp.com";

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(this.API_URL+"/persona");
  }

  getPersona(id: number){
    return this.http.get<Persona>(this.API_URL+"/persona/"+id);
  }

  createPersona(persona: Persona){
    return this.http.post(this.API_URL+"/persona/",persona);
  }

}
