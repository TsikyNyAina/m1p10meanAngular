import { Component, OnInit } from '@angular/core';
import { ResponsableService } from './responsable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.scss'],
  providers: [ResponsableService]
})
export class ResponsableComponent implements OnInit {

  constructor(private responsableService : ResponsableService, private route: Router) { }

  title = 'responsableGarage';
  email: string = "";
  mdp: any = "";
  show: boolean = false;
  

  ngOnInit(): void {
  }

  submit(){
    this.responsableService.getResponable(this.email, this.mdp).subscribe((data: any) => {
      if (Array.isArray(data) && data[0]) {
        console.log(data[0].id);
        this.route.navigate(['/stat']);
      } else {
        this.show = true;
      }
    });
  }
}
