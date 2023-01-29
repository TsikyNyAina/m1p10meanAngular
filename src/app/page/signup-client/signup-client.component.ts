import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entity';
import { ClientService } from '../../service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {

  client = new Client();
  show1: boolean = false;
  
  mesError: string = "";
  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
  }

  async inscription() {
      //let client = { name: this.nom, phoneNumber: this.numero.toString(), email: this.email, mdp: this.mdp1 };
      let response = this.clientService.insertClient(this.client);
      response.then((data:any) => {
        let id = data.id;
        if(id!=undefined){
          this.route.navigate(['/voiture']);
        }
      })
      .catch(error => {
        this.show1 = true;
        this.mesError = error.toString;
      });
     

  }

}
