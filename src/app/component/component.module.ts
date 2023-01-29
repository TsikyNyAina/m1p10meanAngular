import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './input/text/text.component';
import { ActiveModule } from 'projects/active/src/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    ActiveModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    TextComponent
  ]
})
export class ComponentModule { }
