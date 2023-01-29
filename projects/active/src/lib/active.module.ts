import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActiveComponent } from './active.component'; 
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [ActiveComponent],
  imports: [CommonModule,DirectiveModule,ComponentModule,PipeModule],
  exports: [ActiveComponent,DirectiveModule,ComponentModule,PipeModule],
})
export class ActiveModule {}
