import { Component, OnInit } from '@angular/core';
import { MarqueVoiture, ModelVoiture } from 'src/app/entity';

@Component({
  selector: 'app-marque-voiture-save',
  templateUrl: './marque-voiture-save.component.html',
  styleUrls: ['./marque-voiture-save.component.scss']
})
export class MarqueVoitureSaveComponent {

  constructor() { }
  marqueVoiture=new MarqueVoiture()
  modelVoiture=new Array<ModelVoiture>()
  addModel(){
    const modelVoiture=new ModelVoiture();
    modelVoiture.marqueVoitureId=this.marqueVoiture.id;
    this.modelVoiture.push(modelVoiture)
    
  }
  submit(){

  }

}
