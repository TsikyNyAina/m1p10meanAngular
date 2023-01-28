import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ProfilComponent } from './profil/profil.component';
import { ReparationComponent } from './reparation/reparation.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  {
    path:"",
    component:ClientComponent,
    children:[
      {path:"profile",component:ProfilComponent},
      {path:"voiture",component:VoitureComponent},
      {path:"historique",component:HistoriqueComponent},
      {path:"reparation",component:ReparationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
