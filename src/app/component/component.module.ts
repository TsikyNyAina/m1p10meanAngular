import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './input/text/text.component';
import { ActiveModule } from 'projects/active/src/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './input/select/select.component';
import { NumberComponent } from './input/number/number.component';
import { StarComponent } from './input/star/star.component';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    TextComponent,
    SelectComponent,
    NumberComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    ActiveModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule
  ],
  exports:[
    CommonModule,
    TextComponent,
    NumberComponent,
    StarRatingModule,
    StarComponent
  ] 
})
export class ComponentModule { }
