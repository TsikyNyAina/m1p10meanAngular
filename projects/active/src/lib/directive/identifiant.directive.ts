import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[id]'
})
export class IdentifiantDirective {
  @Input() id:any
  constructor(public viewContainerRef:ViewContainerRef) {}

}
