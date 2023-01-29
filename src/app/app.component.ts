import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TextComponent } from './component/input/text/text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'garage';
  item={
    component:TextComponent,
    label:"jajaja",
    data:2222
  } 
  form=new FormBuilder().group({
    name:[2,Validators.required]
  })
  constructor(){ 
    // this.form.valueChanges.subscribe(console.log)

  } 
}
