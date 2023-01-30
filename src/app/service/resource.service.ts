import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http:HttpClient) { }
  
  getLoyer(){
    return this.http.get(`${API_URL}/loyer/depense`)
  }

  getSalaire(){
    return this.http.get(`${API_URL}/salaire/depense`)
  }

  getAchatPiece(){
    return this.http.get(`${API_URL}/achatPiece/depense`)
  }

  getPayement(){
    return this.http.get(`${API_URL}/payement/entree`)
  }

}
