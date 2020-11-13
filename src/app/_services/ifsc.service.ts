import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFSC } from '../_models/ifsc';

@Injectable({
  providedIn: 'root'
})
export class IfscService {

  constructor(private http: HttpClient) { }

  getIFSC(){
    return this.http.get<IFSC>("https://ifsc.razorpay.com/KARB0000001");
  }
}
