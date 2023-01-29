import { Component, OnInit } from '@angular/core'; 
import { getItem } from 'projects/active/src/lib/utils';
import { DetailReparation, Reparation } from 'src/app/entity'; 
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../../service/client.service';
@Component({
  selector: 'app-reparation-save',
  templateUrl: './reparation-save.component.html',
  styleUrls: ['./reparation-save.component.scss']
})
export class ReparationSaveComponent{
  reparation=new Reparation()
  detailReparation=new Array<DetailReparation>();
  voiture:Array<any>=new Array();
  marquePiece:Array<any>=new Array();
  
  constructor(private clientComponent:ClientComponent,private clientService:ClientService) {  
    this.clientService.getVoitureByClientId(this.clientComponent.clientId).subscribe((voiture:any)=>{
      this.voiture=voiture
      getItem(this.reparation).voitureId.data=voiture 
    })
    this.clientService.getMarquePiece().subscribe((marquePiece:any)=>{
      this.marquePiece=marquePiece 
    })
    
  } 


  submit(){
    console.log(this.detailReparation);
  }


  addDetail(){
    const detailReparation=new DetailReparation();
    detailReparation.reparationId=this.reparation.id;
    getItem(detailReparation).marquePieceId.data=this.marquePiece



    this.detailReparation.push(detailReparation);

  }




}
