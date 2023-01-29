import { Directive, Optional, TemplateRef } from '@angular/core';

@Directive({
  selector: '[header]'
})
export class HeaderDirective {
  templateRef: TemplateRef<any>
  constructor(@Optional() templateRef: TemplateRef<any>,) { 
    this.templateRef=templateRef
  }

}