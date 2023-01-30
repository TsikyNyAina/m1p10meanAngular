import { Component, OnInit } from '@angular/core';  
import { ClientComponent } from '../client/client.component';
import { ReparationService } from '../../service'; 
import { Reparation } from 'src/app/entity';


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
  deleteReparation(reparation:Reparation){
    this.reparationService.deleteReparation(reparation.id).subscribe(()=>{
      this.reparation.splice(this.reparation.indexOf(reparation),1);
      this.reparation=[...this.reparation]
    })
  }
}
