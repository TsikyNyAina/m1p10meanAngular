import { Component, OnInit } from '@angular/core';  
import { ClientComponent } from '../client/client.component';
import { ReparationService } from '../../service'; 
import { Payement, Reparation } from 'src/app/entity';
import { ActivatedRoute } from '@angular/router';
import { PayementService } from 'src/app/service/payement.service';


@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit {

  reparation:Array<any>=new Array();
  clientId:string;
  showModal:any=false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private reparationService:ReparationService,
    private clientComponent:ClientComponent,
    private payementService:PayementService
  ) { 

    
    this.clientId=this.clientComponent.clientId
    this.reparationService.getAllReparation().subscribe((m:any)=>console.log(this.reparation=m))
    // this.reparationService.getReparationByClientId(this.clientId).subscribe(console.log)

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
  payer(payement:Payement){ 
    this.payementService.savePayement(payement).subscribe(()=>{
      this.reparationService.getReparationById(payement.reparationId).subscribe((data)=>{
        payement.reparation=Object.assign(payement.reparation,data)
        this.reparation=[...this.reparation]
      })
    })
  }
  newPayement(reparation:Reparation){
    const payement=new Payement();
    payement.reparation=reparation
    payement.reparationId=reparation.id;
    payement.montant=reparation.cost;
    payement.datePayement=new Date()
    return payement
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.showModal = false;
  }
}
