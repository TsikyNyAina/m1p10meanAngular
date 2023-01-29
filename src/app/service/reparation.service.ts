import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL



@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }
  getReparationByVoitureId(voitureId:string){
    const param=[
      {
        $addFields: {
          voitureId: { $toString: "$voitureId" }
        }
      },
      {
        $match:{
          voitureId:voitureId
        }
      }
    ]


    return this.http.get(`${API_URL}/reparation/option/${JSON.stringify(param)}`)
  }

  getAllReparation(){
    return this.http.get(`${API_URL}/reparation/option/[]`)
  }
  getReparationDetailByReparationId(reparationId:string){
    const param=[
      {
        $match:{
          reparationId:reparationId
        }
      }
    ]
    return this.http.get(`${API_URL}/reparationDetail/option/${JSON.stringify(param)}`)
  }
  getReparationByClientId(clientId:string){
    console.log(clientId);
    
    const param=[
      {
        $match:{
          "voiture.clientId":clientId
        }
      }
    ]
    return this.http.get(`${API_URL}/reparation/option/${JSON.stringify(param)}`)
  }

}
