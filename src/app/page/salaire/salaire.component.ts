import { Component, OnInit } from '@angular/core';
import { Salaire } from 'src/app/entity';
import { SalaireService } from 'src/app/service/salaire.service';
import { SalaireSaveComponent } from '../salaire-save/salaire-save.component';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.scss']
})
export class SalaireComponent   {
  salaire=new Array<Salaire>()
  constructor(private salaireSevice:SalaireService) {
    this.salaireSevice.getSalaire().subscribe((m)=>this.salaire)
  }
 
}
