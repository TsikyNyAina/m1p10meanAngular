import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HistoriqueComponent } from '../historique/historique.component';
import { ProfilComponent } from '../profil/profil.component';
import { DetailReparationComponent } from '../detail-reparation/detail-reparation.component';
import { ReparationSaveComponent } from '../reparation-save/reparation-save.component';
import { ReparationComponent } from '../reparation/reparation.component';
import { VoitureComponent } from '../voiture/voiture.component';
import { ListeClientComponent } from '../liste-client/liste-client.component';
import { LoginClientComponent } from '../login-client/login-client.component';
import { SignupClientComponent } from '../signup-client/signup-client.component';
import { VoitureSaveComponent } from '../voiture-save/voiture-save.component';

const routes: Routes = [
  {
    path:"",
    component:ClientComponent,
    children:[
      {path:"",redirectTo:"clients",pathMatch:"full"},
      {path:"profile",component:ProfilComponent},
      {path:"loginClient",component:LoginClientComponent},
      {path:"signupClient",component:SignupClientComponent},
      {path:"voiture/save",component:VoitureSaveComponent},
      {path:"voiture",component:VoitureComponent},
      {path:"clients",component:ListeClientComponent},
      {path:"historique",component:HistoriqueComponent},
      {path:"reparation",component:ReparationComponent},
      {path:"reparation/:id/detail",component:DetailReparationComponent},
      {path:"reparation/save",component:ReparationSaveComponent},
      {path:"reparation/:id/edit",component:ReparationSaveComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
