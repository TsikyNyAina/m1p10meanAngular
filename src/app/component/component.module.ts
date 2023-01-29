import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './input/text/text.component';
import { ActiveModule } from 'projects/active/src/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './input/select/select.component';
import { NumberComponent } from './input/number/number.component';



@NgModule({
  declarations: [
    TextComponent,
    SelectComponent,
    NumberComponent
  ],
  imports: [
    CommonModule,
    ActiveModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    TextComponent,
    NumberComponent
  ]
})
export class ComponentModule { }
