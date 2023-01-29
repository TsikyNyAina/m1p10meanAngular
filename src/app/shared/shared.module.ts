import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { DirectiveModule } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { NzZorroModule } from './nzZorro.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, 
    DirectiveModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    NzZorroModule,
  ],
  exports:[
    CommonModule,
    HttpClientModule, 
    DirectiveModule,
    PipeModule, 
    FormsModule,
    ReactiveFormsModule,
    NzZorroModule, 
  ]
})
export class SharedModule { }
