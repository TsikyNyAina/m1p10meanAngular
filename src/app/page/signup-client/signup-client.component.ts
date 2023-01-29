import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {

  nom: string = "";
  email: string = "";
  numero: string = "";
  mdp1: string = "";
  mdp2: string = "";
  show1: boolean = false;
  
  mesError: string = "";
  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
  }

  async inscription() {
    if (this.mdp1 === this.mdp2) {
      let client = { name: this.nom, phoneNumber: this.numero.toString(), email: this.email, mdp: this.mdp1 };
      let response = this.clientService.insertClient(client);
      response.then((data:any) => {
        let id = data.id;
        if(id!=undefined){
          this.route.navigate(['/voiture']);
        }
      })
      .catch(error => {
        this.mesError = error.toString;
      });
     


    } else {
      this.show1 = true;
    }
  }

}
