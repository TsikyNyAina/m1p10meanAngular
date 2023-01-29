import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component'; 
import { DirectiveModule } from '../directive/directive.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule
  ],
  exports:[
    FormComponent
  ]
})
export class ComponentModule { }
