import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueVoitureSaveComponent } from '../marque-voiture-save/marque-voiture-save.component';
import { MarqueVoitureComponent } from '../marque-voiture/marque-voiture.component';
import { ResponsableComponent } from './responsable.component'; 
import { MarquePieceComponent } from '../marque-piece/marque-piece.component';
import { LoyerComponent } from '../loyer/loyer.component';
import { AchatPieceComponent } from '../achat-piece/achat-piece.component';
import { AchatPieceSaveComponent } from '../achat-piece-save/achat-piece-save.component';
import { SalaireSaveComponent } from '../salaire-save/salaire-save.component';
import { SalaireComponent } from '../salaire/salaire.component';

const routes: Routes = [
  { path:"", component:ResponsableComponent },
  { path:"loyer", component:LoyerComponent },
  { path:"marqueVoiture/save", component:MarqueVoitureSaveComponent },
  { path:"marqueVoiture", component:MarqueVoitureComponent },
  { path:"marquePiece", component:MarquePieceComponent },
  { path:"achatPiece", component:AchatPieceComponent },
  { path:"achatPiece/save", component:AchatPieceSaveComponent },
  { path:"salaire", component:SalaireComponent },
  { path:"salaire/save", component:SalaireSaveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRoutingModule { }
