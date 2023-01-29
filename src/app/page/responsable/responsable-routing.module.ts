import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueVoitureSaveComponent } from './marque-voiture/marque-voiture-save/marque-voiture-save.component';
import { ResponsableComponent } from './responsable.component';

const routes: Routes = [
  { path:"", component:ResponsableComponent },
  { path:"marqueVoiture/save", component:MarqueVoitureSaveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRoutingModule { }
