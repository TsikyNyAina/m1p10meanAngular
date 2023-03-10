import { Component, OnInit } from '@angular/core';
import { getItem } from 'projects/active/src/lib/utils';
import { MarquePiece, ModelVoiture } from 'src/app/entity';

@Component({
  selector: 'app-marque-piece',
  templateUrl: './marque-piece.component.html',
  styleUrls: ['./marque-piece.component.scss']
})
export class MarquePieceComponent{

  constructor() {
    getItem(this.marquePiece).modelVoiture.hide=true
   }
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
