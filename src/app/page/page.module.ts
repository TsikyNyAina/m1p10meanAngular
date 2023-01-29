import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ResponsableModule } from './responsable/responsable.module';
import { DetailReparationComponent } from './detail-reparation/detail-reparation.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ProfilComponent } from './profil/profil.component';
import { ReparationSaveComponent } from './reparation-save/reparation-save.component';
import { ReparationComponent } from './reparation/reparation.component';
import { VoitureComponent } from './voiture/voiture.component';
import { MarqueVoitureComponent } from './marque-voiture/marque-voiture.component';
import { MarqueVoitureSaveComponent } from './marque-voiture-save/marque-voiture-save.component';
import { SharedModule } from '../shared/shared.module';
import { MarquePieceComponent } from './marque-piece/marque-piece.component';
import { ListeClientComponent } from './liste-client/liste-client.component';


@NgModule({
  declarations: [
    ProfilComponent,
    VoitureComponent,
    HistoriqueComponent,
    ReparationComponent,
    DetailReparationComponent,
    ReparationSaveComponent,
    MarqueVoitureComponent,
    MarqueVoitureSaveComponent,
    MarquePieceComponent,
    ListeClientComponent, 
  ],
  imports: [
    CommonModule,
    ClientModule,
    ResponsableModule,
    SharedModule
  ],
  exports:[
    ProfilComponent,
    VoitureComponent,
    HistoriqueComponent,
    ReparationComponent,
    DetailReparationComponent,
    ReparationSaveComponent,
    
    
    ClientModule,
    ResponsableModule
  ]
})
export class PageModule { }
