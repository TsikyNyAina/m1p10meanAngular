import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http:HttpClient) { }
  

  getResponable(mail:string,tmdp:string){
    let match = [{$match:{email:mail,mdp:tmdp}}];
    return this.http.get(`${API_URL}/responsable/option/${JSON.stringify(match)}`)
  }

  getMarqueVoiture(){
    return this.http.get(`${API_URL}/marqueVoiture/option/[]`);
  }
  getAllResponable(pipeline=new Array()){
    return this.http.get(`${API_URL}/responsable/option/${JSON.stringify(pipeline)}`)
  }

}
