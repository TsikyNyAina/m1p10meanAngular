import { Component } from '@angular/core'; 
import { getItem } from 'projects/active/src/lib/utils';
import { Client } from './entity/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'garage';
  client=new Client()
  client2=new Client()
   
  constructor(){  
    
  
  } 
  show(){
    
  }
}
