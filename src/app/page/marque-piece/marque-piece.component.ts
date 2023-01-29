import { Component, OnInit } from '@angular/core';
import { MarquePiece, ModelVoiture } from 'src/app/entity';

@Component({
  selector: 'app-marque-piece',
  templateUrl: './marque-piece.component.html',
  styleUrls: ['./marque-piece.component.scss']
})
export class MarquePieceComponent{

  constructor() { }
  marquePiece=new MarquePiece()
  modelVoiture=new Array<ModelVoiture>()
  addModel(){
    const modelVoiture=new ModelVoiture();
    modelVoiture.marqueVoitureId=this.marquePiece.id;
    this.modelVoiture.push(modelVoiture)
  }
  submit(){

  }
}
