import { Directive, Input, Optional, TemplateRef } from '@angular/core';

@Directive({
  selector: '[body]',
  exportAs:"body"
})
export class BodyDirective {
  @Input() body: any;
  templateRef: TemplateRef<any>
  i:any;
  constructor(@Optional() templateRef: TemplateRef<any>,) { 
    this.templateRef=templateRef
  }

}
