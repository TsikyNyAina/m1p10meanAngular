import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientId="63d509650c4fa470b8443fcd";

  constructor(private clientService:ClientService) { 
    // this.clientService.getClientById(this.clientId). subscribe(console.log) 
  }

  ngOnInit(): void {
  }

}
