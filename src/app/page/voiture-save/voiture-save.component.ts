import { Component, OnInit } from '@angular/core';
import { getItem } from 'projects/active/src/lib/utils';
import { Voiture } from 'src/app/entity/Voiture';
import { ClientService } from 'src/app/service';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-voiture-save',
  templateUrl: './voiture-save.component.html',
  styleUrls: ['./voiture-save.component.scss']
})
export class VoitureSaveComponent implements OnInit {
  voiture = new Voiture();
  constructor(private clientComponent:ClientComponent,private clientService:ClientService) {  
    this.voiture.clientId = this.clientComponent.clientId;
    this.clientService.getModeleVoiture().subscribe((modele:any)=>{
      getItem(this.voiture).modelVoitureId.data=modele 
    });

  }

  ngOnInit(): void {
  }
  submit(){
    this.clientService.insertVoiture(this.voiture).then(voiture=>{
      console.log(voiture);
    }).catch(error => {
      console.log(error);
    });
  }
}
