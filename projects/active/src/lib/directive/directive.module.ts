import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective } from './form.directive';
import { ControlDirective } from './control.directive';



@NgModule({
  declarations: [
    FormDirective,
    ControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormDirective,
    ControlDirective
  ]
})
export class DirectiveModule { }
