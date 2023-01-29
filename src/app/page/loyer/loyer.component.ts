import { Component, OnInit } from '@angular/core';
import { Loyer } from 'src/app/entity';
import { LoyerService } from 'src/app/service';

@Component({
  selector: 'app-loyer',
  templateUrl: './loyer.component.html',
  styleUrls: ['./loyer.component.scss']
})
export class LoyerComponent implements OnInit {

  loyer = new Loyer();
  listeLoyer :Array<Loyer>=new Array();
  constructor(private loyerService: LoyerService) { 
    this.loyerService.getLoyer().subscribe((loyer:any)=>{
      this.listeLoyer=loyer;
    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.loyerService.saveLoyer(this.loyer).then((loyer:any)=>{
      console.log(loyer);
    }).catch((error:any) => {
      console.log(error);
    });
  }
}
