import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module'; 
import { SharedModule } from 'src/app/shared/shared.module'; 
import { ActiveModule } from 'projects/active/src/src';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    ClientComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ActiveModule,
    SharedModule,
    ComponentModule
  ],
  exports:[
    CommonModule, 
    ClientRoutingModule,
    ClientComponent
  ]
})
export class ClientModule { }
