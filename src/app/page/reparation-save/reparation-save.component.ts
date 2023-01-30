import { Component, OnInit } from '@angular/core'; 
import { getItem } from 'projects/active/src/lib/utils';
import { DetailReparation, Reparation } from 'src/app/entity'; 
import { ClientComponent } from '../client/client.component';
import { ClientService, DetailReparationService, MarquePieceService, ReparationService } from '../../service';
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
  
  constructor(
    private clientComponent:ClientComponent,
    private clientService:ClientService,
    private marquePieceService:MarquePieceService,
    private reparationService:ReparationService,
    private detailReparationService:DetailReparationService
  ) {  
    this.clientService.getVoitureByClientId(this.clientComponent.clientId).subscribe((voiture:any)=>getItem(this.reparation).voitureId.data=this.voiture=voiture )
    this.marquePieceService.getMarquePiece().subscribe((marquePiece:any)=>this.marquePiece=marquePiece )
    
  } 


  submit(){
    this.reparation.reparationDetail=this.detailReparation;
    this.reparationService.saveReparation(this.reparation).subscribe(console.log);
  }


  addDetail(){
    const detailReparation=new DetailReparation();
    detailReparation.reparationId=this.reparation.id;
    getItem(detailReparation).marquePieceId.data=this.marquePiece



    // this.detailReparation.push(detailReparation);
    this.detailReparation=[...this.detailReparation,detailReparation]
  }
  deleteDetail(detailReparation:DetailReparation){
    this.detailReparation.splice(this.detailReparation.indexOf(detailReparation),1);
      this.detailReparation=[...this.detailReparation]
      if(detailReparation.id){
          this.detailReparationService.deleteDetailReparation(detailReparation.id).subscribe()
      }
  }



}
