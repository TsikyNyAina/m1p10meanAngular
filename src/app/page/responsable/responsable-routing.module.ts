import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueVoitureSaveComponent } from '../marque-voiture-save/marque-voiture-save.component';
import { MarqueVoitureComponent } from '../marque-voiture/marque-voiture.component';
import { ResponsableComponent } from './responsable.component'; 
import { MarquePieceComponent } from '../marque-piece/marque-piece.component';

const routes: Routes = [
  { path:"", component:ResponsableComponent },
  { path:"marqueVoiture/save", component:MarqueVoitureSaveComponent },
  { path:"marqueVoiture", component:MarqueVoitureComponent },
  { path:"marquePiece", component:MarquePieceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRoutingModule { }
