import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module'; 
import { SharedModule } from 'src/app/shared/shared.module'; 
import { ActiveModule } from 'projects/active/src/src';



@NgModule({
  declarations: [
    ClientComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ActiveModule,
    SharedModule
  ],
  exports:[
    CommonModule, 
    ClientRoutingModule
  ]
})
export class ClientModule { }
