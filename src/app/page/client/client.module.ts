import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports:[
    ClientComponent,
    ClientRoutingModule
  ]
})
export class ClientModule { }
