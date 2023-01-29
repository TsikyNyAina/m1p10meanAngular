import { Component, OnInit } from '@angular/core';
import { AchatPiece } from 'src/app/entity';
import { AchatPieceService } from 'src/app/service';

@Component({
  selector: 'app-achat-piece',
  templateUrl: './achat-piece.component.html',
  styleUrls: ['./achat-piece.component.scss']
})
export class AchatPieceComponent{

  constructor(private achatPieceSevice:AchatPieceService) { 
    this.achatPieceSevice.getAchatPiece().subscribe((data:any)=>this.achatPiece=data);
  }
  achatPiece=new Array<AchatPiece>() 

}
