import { Directive, Input, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponent } from '../component/form/form.component';

@Directive({
  selector: 'lib-form',
  providers: []
})
export class ControlDirective    {
   

  constructor(private formComponent:FormComponent,private control: NgControl) { 
    this.formComponent.control=control;
    let c:any=this.formComponent;
    c.writeValue =function(){}
    c.registerOnChange=function(){}
    c.registerOnTouched=function(){}
    c.setDisabledState=function(){}
    
  } 

}
