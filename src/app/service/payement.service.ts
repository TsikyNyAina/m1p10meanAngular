import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Payement, Reparation } from '../entity';
const API_URL=environment.APi_URL




@Injectable({
  providedIn: 'root'
})
export class PayementService {

  constructor(private http:HttpClient) { }
  savePayement(payement:Payement){
    return this.http.post(`${API_URL}/payement/`,payement);
  }
  getPayement(pipeline=new Array()){
    return this.http.get(`${API_URL}/payement`);
  }
  


}

