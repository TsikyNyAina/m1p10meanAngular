import { Component, OnInit } from '@angular/core';
import { getItem } from 'projects/active/src/lib/utils';
import { AchatPiece, MarquePiece } from 'src/app/entity';
import { MarquePieceService } from 'src/app/service';

@Component({
  selector: 'app-achat-piece-save',
  templateUrl: './achat-piece-save.component.html',
  styleUrls: ['./achat-piece-save.component.scss']
})
export class AchatPieceSaveComponent {
  marquePiece=new Array<MarquePiece>();
  achatPiece=new AchatPiece();
  constructor(private marquePieceService:MarquePieceService) { 
    this.marquePieceService.getMarquePiece().subscribe((m:any)=>getItem(this.achatPiece).marquePieceId.data=this.marquePiece=m)
  }
}
