import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[form]'
})
export class FormDirective {
  @Input() form:any;
  constructor() { 
    console.log("hahah");
    
  }

}
