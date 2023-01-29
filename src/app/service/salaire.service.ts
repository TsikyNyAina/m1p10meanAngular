import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL

@Injectable({
  providedIn: 'root'
})
export class SalaireService {

  constructor(private http:HttpClient) { }
  getSalaire(pipeline=new Array()){
    return this.http.get(`${API_URL}/salaire/option/${JSON.stringify(pipeline)}`)
  }
}
