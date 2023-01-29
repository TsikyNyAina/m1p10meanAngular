import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActiveModule } from 'projects/active/src/src';
import { PageModule } from '../page/page.module';
import { ComponentModule } from '../component/component.module';
import { DirectiveModule } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

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
  ]
})
export class SharedModule { }
