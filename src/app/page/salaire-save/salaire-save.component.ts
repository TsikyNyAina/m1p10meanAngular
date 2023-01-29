import { Component, OnInit } from '@angular/core';
import { getItem } from 'projects/active/src/lib/utils';
import { Salaire } from 'src/app/entity';
import { ResponsableService } from 'src/app/service';

@Component({
  selector: 'app-salaire-save',
  templateUrl: './salaire-save.component.html',
  styleUrls: ['./salaire-save.component.scss']
})
export class SalaireSaveComponent  {
  salaire=new Salaire();
  responsable=new Array();
  constructor(private responsableService:ResponsableService) { 
    this.responsableService.getAllResponable().subscribe((m:any)=> getItem(this.salaire).responsableId.data=this.responsable=m)
  }

}
