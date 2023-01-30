import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL=environment.APi_URL
@Injectable({
  providedIn: 'root'
})
export class DetailReparationService {

  constructor(private http:HttpClient) {}

  deleteDetailReparation(detailReparationId:string){
    return this.http.delete(`${API_URL}/reparationDetail/${detailReparationId}`);
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

}
