import { Component, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { Data } from 'projects/active/src/lib/type';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  #value:any=0;
  set value(value:any){  
      this.#value=value;
      if(this.formControl?.value!=value){
        this.formControl?.setValue(this.value)
    } 
  }
  get value(){
    return this.#value
  }
  #formControl:FormControl
  
  set formControl(formControl:FormControl){ 
      this.#formControl=formControl
      this.formControl?.valueChanges.subscribe(v=>this.value=v)
      this.value=this.formControl.value 
  }
  get formControl(){
    return this.#formControl
  }
  constructor(data:Data) { 
    
    
  } 
   
}
