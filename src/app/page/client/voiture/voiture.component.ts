import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/entity/Voiture';
import { ClientComponent } from '../client.component';
import { ClientService } from '../client.service';
import { getItem } from 'projects/active/src/lib/utils';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {
  voiture:Array<any>=new Array();
  voiturei = new Voiture();

  constructor(private clientComponent:ClientComponent,private clientService:ClientService) {  
    this.clientService.getVoitureByClientId(this.clientComponent.clientId).subscribe((voiture:any)=>console.dir(this.voiture=voiture))
    this.clientService.getModeleVoiture().subscribe((modele:any)=>{
      console.log(modele);
      
      getItem(this.voiturei).modeleId.data=modele 
    });
    
  } 

  ngOnInit(): void {
  }

}
