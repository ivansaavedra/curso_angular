import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../_models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  API_URL = "https://cursoangularapi2020.herokuapp.com";

  constructor(private http: HttpClient) { }

  // List
  getPersonas(){
    return this.http.get<Persona[]>(this.API_URL+"/persona");
  }

  // Read
  getPersona(id: number){
    return this.http.get<Persona>(this.API_URL+"/persona/"+id);
  }

  // Create
  createPersona(persona: Persona){
    return this.http.post(this.API_URL+"/persona/",persona);
  }

  // Update
  updatePersona(persona: Persona){
    return this.http.put(this.API_URL+"/persona/"+persona.id,persona);
  }

  // Delete
  deletePersona(id: number){
    return this.http.delete(this.API_URL+"/persona/"+id);
  }
}
