import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Delegacion } from '../_models/delegacion';

@Injectable({
  providedIn: 'root'
})
export class DelegacionService {

  API_URL = "https://cursoangularapi2020.herokuapp.com";

  constructor(private http: HttpClient) { }

  // List
  getDelegaciones(){
    return this.http.get<Delegacion[]>(this.API_URL+"/delegacion");
  }
}
