import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableComponent } from './responsable.component';
import { ResponsableRoutingModule } from './responsable-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActiveModule } from 'projects/active/src/src'; 
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ResponsableComponent,
    
  ],
  imports: [
    CommonModule,
    ResponsableRoutingModule,
    ActiveModule,
    SharedModule,
    ChartsModule
  ],
  exports:[
    ResponsableComponent, 
    ResponsableRoutingModule
  ]
})
export class ResponsableModule { }
