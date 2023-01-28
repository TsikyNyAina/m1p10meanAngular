import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientModule
  ],
  exports:[
    ClientModule
  ]
})
export class PageModule { }
