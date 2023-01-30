import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/entity/Voiture'; 
import { getItem } from 'projects/active/src/lib/utils';
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../../service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {
  voiture:Array<any>=new Array();
  

  constructor(private clientComponent:ClientComponent,private clientService:ClientService) {  
    this.clientService.getAllVoiture().subscribe((voiture:any)=>console.dir(this.voiture=voiture))
    
    
  } 

  ngOnInit(): void {
  }

 

}
