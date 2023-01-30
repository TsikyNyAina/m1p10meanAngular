import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  loyer : Number;
  salaire : Number;
  achatPiece : Number;
  total : Number;

  entree : Number;
  benefice : Number;

  constructor(private resourceService : RessourceService) { 
    
   

  }

  ngOnInit(): void {
    this.resourceService.getLoyer().subscribe((client:any)=>{
      this.loyer=client.total;
      this.resourceService.getSalaire().subscribe((salaire:any)=>{
        this.salaire=salaire.total;
        this.resourceService.getAchatPiece().subscribe((piece:any)=>{
          this.achatPiece=piece.total;
          this.total =+this.achatPiece + +this.loyer + +this.salaire; 
          this.resourceService.getPayement().subscribe((payement:any)=>{
            this.entree=payement.total;
            this.benefice =+this.entree - +this.total; 
          });
        });
      });
    });

    

    
  }

  ngAfterViewInit(){
  }

}
