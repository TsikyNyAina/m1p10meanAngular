import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entity';
import { ClientService } from 'src/app/service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {
  client:Array<Client>=new Array();
  constructor(private clientService: ClientService) {
    this.clientService.getAllClient().subscribe((client:any)=>{
      this.client=client;
    });
   }

  ngOnInit(): void {
  }

  envoyer(mail: any){
    this.clientService.envoyermail(mail).then((m:any)=>{
      alert(m.message);
    }).catch(error=>{
      alert("email non envoyer");
    });
  }

}
