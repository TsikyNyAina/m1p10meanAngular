import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Data } from 'projects/active/src/lib/type';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  #value:any="hahaha";
  set value(value:any){
    this.#value=value;
    if(this.ngControl.control?.value!=value){
      this.ngControl.control?.setValue(this.value)
    }
  }
  get value(){
    return this.#value
  }
  ngControl:NgControl
  
  
  
  constructor(ngContol:NgControl,data:Data) {
    this.ngControl=ngContol;
    this.ngControl.control?.valueChanges.subscribe(v=>this.value=v)
  } 
}
