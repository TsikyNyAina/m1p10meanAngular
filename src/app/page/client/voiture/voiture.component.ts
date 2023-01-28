import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client.component';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {
  voiture:Array<any>=new Array();

  constructor(private clientComponent:ClientComponent,private clientService:ClientService) {  
    this.clientService.getVoitureByClientId(this.clientComponent.clientId).subscribe((voiture:any)=>console.dir(this.voiture=voiture))
 
    
  } 

  ngOnInit(): void {
  }

}