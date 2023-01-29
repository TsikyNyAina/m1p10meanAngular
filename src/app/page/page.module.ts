import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';
import { ResponsableModule } from './responsable/responsable.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientModule,
    ResponsableModule
  ],
  exports:[
    ClientModule,
    ResponsableModule
  ]
})
export class PageModule { }
