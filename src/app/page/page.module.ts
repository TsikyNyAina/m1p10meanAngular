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
import { LoginClientComponent } from './login-client/login-client.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { ActiveModule } from 'projects/active/src/src';
import { ComponentModule } from '../component/component.module';
import { AchatPieceComponent } from './achat-piece/achat-piece.component';
import { AchatPieceSaveComponent } from './achat-piece-save/achat-piece-save.component';
import { LoyerComponent } from './loyer/loyer.component';
// import { LoyerSaveComponent } from './loyer-save/loyer-save.component';
import { SalaireComponent } from './salaire/salaire.component'; 
import { SalaireSaveComponent } from './salaire-save/salaire-save.component';
import { VoitureSaveComponent } from './voiture-save/voiture-save.component';
import { StatComponent } from './stat/stat.component';


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
    LoginClientComponent,
    SignupClientComponent,
    AchatPieceComponent,
    AchatPieceSaveComponent,
    LoyerComponent,
    // LoyerSaveComponent,
    SalaireComponent,
    SalaireSaveComponent,
    VoitureSaveComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    ClientModule,
    ResponsableModule,
    SharedModule,
    ActiveModule,
    ComponentModule
  ],
  exports:[
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
    LoginClientComponent,
    SignupClientComponent,
    AchatPieceComponent,
    AchatPieceSaveComponent,
    LoyerComponent,
    // LoyerSaveComponent,
    SalaireComponent,
    SalaireSaveComponent,
    VoitureSaveComponent
  ]
})
export class PageModule { }
