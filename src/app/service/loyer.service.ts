import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AchatPiece, Loyer } from '../entity';
const API_URL=environment.APi_URL
@Injectable({
  providedIn: 'root'
})
export class LoyerService {

  constructor(private http:HttpClient) { }
  getLoyer(){
    return this.http.get(`${API_URL}/loyer/option/[]`)
  }
  saveLoyer(achatPiece:Loyer){
    return this.http.post(`${API_URL}/loyer/`,achatPiece).toPromise();
  }
  updateLoyer(achatPiece:Loyer){
    return this.http.put(`${API_URL}/loyer/`,achatPiece);
  }
  deleteLoyer(loyerId:String){
    return this.http.delete(`${API_URL}/loyer/${loyerId}`);
  }
  
}
