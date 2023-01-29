import { Component, OnInit } from '@angular/core';  
import { ClientComponent } from '../client/client.component';
import { ReparationService } from '../../service/reparation.service'; 


@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit {

  reparation:Array<any>=new Array();
  clientId:string;
  voitureId="63d50b6d6b69eba263d2cded"
  constructor(
    private reparationService:ReparationService,
    private clientComponent:ClientComponent
  ) { 
    this.clientId=this.clientComponent.clientId
    this.reparationService.getReparationByVoitureId(this.voitureId).subscribe((m:any)=>this.reparation=m)
    this.reparationService.getReparationByClientId(this.clientId).subscribe(console.log)

  }

  ngOnInit(): void {
  }

}
