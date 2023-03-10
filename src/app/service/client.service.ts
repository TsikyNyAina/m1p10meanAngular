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
    return this.http.get(`${API_URL}/client/${clientId}`)
  }

  getClient(mail:string,tmdp:string){
    let match = [{$match:{email:mail,mdp:tmdp}}];
    return this.http.get(`${API_URL}/client/option/${JSON.stringify(match)}`)
  }

  getAllClient(){
    return this.http.get(`${API_URL}/client/option/[]`)
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

  getAllVoiture(){
    
    return this.http.get(`${API_URL}/voiture/option/[]`)
  }
  
  insertClient(client: any){
    return this.http.post(`${API_URL}/client`, client).toPromise();
  }

  envoyermail(mail: any){
    let body : any;
    return this.http.post(`${API_URL}/client/${mail}`, body).toPromise();
  }

  insertVoiture(voiture: any){
    return this.http.post(`${API_URL}/voiture`, voiture).toPromise();
  }

  
  getModeleVoiture(){
    return this.http.get(`${API_URL}/ModelVoiture/option/[]`);
  }

}
