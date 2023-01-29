import { Component, OnInit } from '@angular/core';  
import { ClientComponent } from '../client/client.component';
import { ReparationService } from '../../service'; 


@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit {

  reparation:Array<any>=new Array();
  clientId:string;
  constructor(
    private reparationService:ReparationService,
    private clientComponent:ClientComponent
  ) { 
    this.clientId=this.clientComponent.clientId
    this.reparationService.getAllReparation().subscribe((m:any)=>this.reparation=m)
    this.reparationService.getReparationByClientId(this.clientId).subscribe(console.log)

  }
  JSON=JSON
  ngOnInit(): void {
  }

}
