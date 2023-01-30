import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reparation } from '../entity';

const API_URL=environment.APi_URL



@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }

  getReparationById(reparationId:string){
    return this.http.get(`${API_URL}/reparation/${reparationId}`)

  }

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
  saveReparation(reparation:Reparation){
    return this.http.post(`${API_URL}/reparation`,reparation)
  }
  updateReparation(reparation:Reparation){
    return this.http.put(`${API_URL}/reparation`,reparation)
  }
  deleteReparation(reparationId:string){
    return this.http.delete(`${API_URL}/reparation/${reparationId}`)
  }
}
