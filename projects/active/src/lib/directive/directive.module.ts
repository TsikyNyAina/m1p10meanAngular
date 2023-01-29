import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective } from './form.directive';
import { IdentifiantDirective } from './identifiant.directive';
import { VarDirective } from './var.directive';



@NgModule({
  declarations: [
    FormDirective,
    IdentifiantDirective,
    VarDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormDirective,
    IdentifiantDirective,
    VarDirective
  ]
})
export class DirectiveModule { }
