import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { VoitureComponent } from './voiture/voiture.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReparationComponent } from './reparation/reparation.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClientComponent,
    ProfilComponent,
    VoitureComponent,
    HistoriqueComponent,
    ReparationComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  exports:[
    ClientComponent,
    ProfilComponent,
    VoitureComponent,
    HistoriqueComponent,
    ReparationComponent,
    ClientRoutingModule
  ]
})
export class ClientModule { }
