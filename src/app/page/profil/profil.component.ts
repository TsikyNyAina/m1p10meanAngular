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

  constructor(private clientService: ClientService, private route: Router) { }


  ngOnInit(): void {
  }
}
