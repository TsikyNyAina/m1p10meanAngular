import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../../service/responsable.service';
import { Router } from '@angular/router';
import { Responsable } from 'src/app/entity';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.scss'],
  providers: [ResponsableService]
})
export class ResponsableComponent implements OnInit {

  constructor(private responsableService : ResponsableService, private route: Router) { }

  title = 'responsableGarage';
  responsable = new Responsable();
  show: boolean = false;
  
  ngOnInit(): void {
  }

  submit(){
    this.responsableService.getResponable(this.responsable.email, this.responsable.mdp).subscribe((data: any) => {
      console.log(data);
      if (Array.isArray(data) && data[0]) {
        console.log(data[0].id);
        this.route.navigate(['/voiture']);
      } else {
        this.show = true;
      }
    });
  }
}
