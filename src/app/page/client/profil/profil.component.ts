import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [ClientService]
})
export class ProfilComponent implements OnInit {

  title = 'clientGarage';
  email: string = "";
  mdp: any = "";
  show: boolean = false;

  constructor(private clientService: ClientService, private route: Router) { }

  
  ngOnInit(): void {
  }

  submit(){
    this.clientService.getClient(this.email,this.mdp).subscribe(data=> {
      if(Array.isArray(data) && data[0]){
        console.log(data);
        this.route.navigate(['/voiture']);
      } else {
        this.show = true;
      }
    });
  }

}
