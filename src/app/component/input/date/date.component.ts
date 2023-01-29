import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { Data, Item } from 'projects/active/src/lib/type'; 

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  #value:any;
  item:Item;
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
  constructor(item:Data) { 
    this.item=item as any 
    
  } 

}
