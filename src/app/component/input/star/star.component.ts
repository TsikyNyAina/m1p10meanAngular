import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Data } from 'projects/active/src/lib/type';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent {
 
  tooltips = ['20%', '40%', '60%', '80%', '100%'];
  #value:any=100;
  set value(value:any){  
      this.#value=value;
      if(this.formControl?.value!=value*20){
        this.formControl?.setValue(this.value*20)
    } 
  }
  get value(){
    return this.#value
  }
  #formControl:FormControl
  
  set formControl(formControl:FormControl){ 
      this.#formControl=formControl
      this.formControl?.valueChanges.subscribe(v=>this.value=v/20)
      this.value=this.formControl.value 
  }
  get formControl(){
    return this.#formControl
  }
  constructor(data:Data) { 
    
    
  } 
   
}
