import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableComponent } from './responsable.component';
import { ResponsableRoutingModule } from './responsable-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActiveModule } from 'projects/active/src/src';
import { MarqueVoitureComponent } from './marque-voiture/marque-voiture.component';
import { MarqueVoitureSaveComponent } from './marque-voiture/marque-voiture-save/marque-voiture-save.component'; 



@NgModule({
  declarations: [
    ResponsableComponent,
    MarqueVoitureComponent,
    MarqueVoitureSaveComponent, 
  ],
  imports: [
    CommonModule,
    ResponsableRoutingModule,
    ActiveModule,
    SharedModule
  ],
  exports:[
    ResponsableComponent,
    MarqueVoitureComponent, 
    ResponsableRoutingModule
  ]
})
export class ResponsableModule { }
