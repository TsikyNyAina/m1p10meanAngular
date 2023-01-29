import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDirective } from './body.directive';
import { HeaderDirective } from './header.directive';



@NgModule({
  declarations: [
    BodyDirective,
    HeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyDirective,
    HeaderDirective
  ]
})
export class DirectiveModule { }
