import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getClientById(clientId:string){
    return this.http.get(`${API_URL}/clientController/${clientId}`)
  }
  getVoitureByClientId(clientId:string){
    const param=[
      {
        $addFields: {
          clientId: { $toString: "$clientId" }
        }
      },
      {
        $match:{
          clientId:clientId
        }
      }
    ]
    return this.http.get(`${API_URL}/voiture/option/${JSON.stringify(param)}`)
  }
  



}