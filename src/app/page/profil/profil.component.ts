import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ClientService } from '../../service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [ClientService]
})
export class ProfilComponent implements OnInit {

  title = 'clientGarage';
  mesError: string = "";
  email: string = "";
  mdp: any = "";
  show: boolean = false;
  show1: boolean = false;

  signin: boolean = true;

  nom: string = "";
  emaili: string = "";
  numero: string = "";
  mdp1: string = "";
  mdp2: string = "";

  constructor(private clientService: ClientService, private route: Router) { }


  ngOnInit(): void {
  }

  changer(stat: boolean) {
    this.signin = stat;
  }

  submit() {
    this.clientService.getClient(this.email, this.mdp).subscribe(data => {
      if (Array.isArray(data) && data[0]) {
        console.log(data);
        this.route.navigate(['/voiture']);
      } else {
        this.show = true;
      }
    });
  }

  async inscription() {
    if (this.mdp1 === this.mdp2) {
      let client = { name: this.nom, phoneNumber: this.numero.toString(), email: this.emaili, mdp: this.mdp1 };
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
