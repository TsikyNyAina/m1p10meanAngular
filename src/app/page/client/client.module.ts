import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { VoitureComponent } from './voiture/voiture.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReparationComponent } from './reparation/reparation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailReparationComponent } from './reparation/detail-reparation/detail-reparation.component';
import { ReparationSaveComponent } from './reparation/reparation-save/reparation-save.component';
import { ActiveModule } from 'projects/active/src/src';



@NgModule({
  declarations: [
    ClientComponent,
    ProfilComponent,
    VoitureComponent,
    HistoriqueComponent,
    ReparationComponent,
    DetailReparationComponent,
    ReparationSaveComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ActiveModule
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
