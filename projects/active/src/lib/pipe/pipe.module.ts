import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstKeyPipe } from './first-key.pipe';



@NgModule({
  declarations: [FirstKeyPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FirstKeyPipe
  ]
})
export class PipeModule { }
