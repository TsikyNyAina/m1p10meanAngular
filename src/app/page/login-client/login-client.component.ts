import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service';
import { Router } from '@angular/router';
import { Client } from 'src/app/entity';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss'],
  providers:[ClientService]
})
export class LoginClientComponent implements OnInit {

  client = new Client();
  show: boolean = false;

  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.clientService.getClient(this.client.email, this.client.mdp).subscribe(data => {
      if (Array.isArray(data) && data[0]) {
        console.log(data);
        this.route.navigate(['/voiture']);
      } else {
        this.show = true;
      }
    });
  }

}
