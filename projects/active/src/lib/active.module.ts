import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActiveComponent } from './active.component'; 
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [ActiveComponent],
  imports: [CommonModule,DirectiveModule,ComponentModule],
  exports: [ActiveComponent,DirectiveModule,ComponentModule],
})
export class ActiveModule {}
