import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component'; 
import { DirectiveModule } from '../directive/directive.module';
import { PipeModule } from '../pipe/pipe.module';
import { InlineFormComponent } from './inline-form/inline-form.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FormComponent,
    InlineFormComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    PipeModule,
    SharedModule
  ],
  exports:[
    CommonModule,
    FormComponent,
    InlineFormComponent,
    DirectiveModule,
    PipeModule,
    SharedModule
  ]
})
export class ComponentModule { }
