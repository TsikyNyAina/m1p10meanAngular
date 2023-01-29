import { Component, OnInit } from '@angular/core';
import { MarqueVoiture } from 'src/app/entity';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-marque-voiture',
  templateUrl: './marque-voiture.component.html',
  styleUrls: ['./marque-voiture.component.scss'],
  providers:[ResponsableService]
})
export class MarqueVoitureComponent implements OnInit {

  marqueVoiture : Array<any>=new Array();
  constructor(private responsableService: ResponsableService) { 
    this.responsableService.getMarqueVoiture().subscribe((voiture:any)=>console.dir(this.marqueVoiture=voiture));
  }

  ngOnInit(): void {
  }

}
