import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component'; 
import { DirectiveModule } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';
import { InlineFormComponent } from './inline-form/inline-form.component';



@NgModule({
  declarations: [
    FormComponent,
    InlineFormComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    PipeModule
  ],
  exports:[
    FormComponent
  ]
})
export class ComponentModule { }
