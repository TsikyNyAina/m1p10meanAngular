import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActiveModule } from 'projects/active/src/src';  
import { DirectiveModule } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NzRateModule } from 'ng-zorro-antd/rate';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ActiveModule, 
    DirectiveModule,
    PipeModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    ActiveModule, 
    DirectiveModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    NzRateModule
  ]
})
export class SharedModule { }
