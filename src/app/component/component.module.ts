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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SwitchComponent } from './input/switch/switch.component';
import { DateComponent } from './input/date/date.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    TextComponent,
    SelectComponent,
    NumberComponent,
    StarComponent,
    SwitchComponent,
    DateComponent,
    TableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ActiveModule,
    SharedModule,
    RouterModule
  ],
  exports:[ 
    TextComponent,
    SelectComponent,
    NumberComponent,
    StarComponent,
    SwitchComponent,
    DateComponent,
    TableComponent,
    MenuComponent
    
  ] 
})
export class ComponentModule { }
