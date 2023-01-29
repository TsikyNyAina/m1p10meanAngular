import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './input/text/text.component';
import { ActiveModule } from 'projects/active/src/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './input/select/select.component';
import { NumberComponent } from './input/number/number.component';
import { StarComponent } from './input/star/star.component';
import { SharedModule } from '../shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    NzButtonModule,
  ],
  exports:[
    BrowserAnimationsModule,
    CommonModule,
    TextComponent,
    NumberComponent,
    StarComponent,
    
  ] 
})
export class ComponentModule { }
