import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL=environment.APi_URL
@Injectable({
  providedIn: 'root'
})
export class MarquePieceService {

  constructor(private http:HttpClient) { }
  getMarquePiece(pipeline=new Array()){
    return this.http.get(`${API_URL}/marquePiece/option/${JSON.stringify(pipeline)}`);
  }

}
