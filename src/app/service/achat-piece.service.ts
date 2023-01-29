import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AchatPiece } from '../entity';
const API_URL=environment.APi_URL
@Injectable({
  providedIn: 'root'
})
export class AchatPieceService {

  constructor(private http:HttpClient) { }
  getAchatPiece(pipeline=new Array()){
    return this.http.get(`${API_URL}/achatPiece/option/${JSON.stringify(pipeline)}`)
  }
  saveAchatPiece(achatPiece:AchatPiece){
    return this.http.post(`${API_URL}/achatPiece/`,achatPiece);
  }
  updateAchatPiece(achatPiece:AchatPiece){
    return this.http.put(`${API_URL}/achatPiece/`,achatPiece);
  }
  deleteAchatPiece(achatPieceId:String){
    return this.http.delete(`${API_URL}/achatPiece/${achatPieceId}`);
  }
  
}
