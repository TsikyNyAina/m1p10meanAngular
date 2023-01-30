import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ReparationService } from '../../service';

@Component({
  selector: 'app-detail-reparation',
  templateUrl: './detail-reparation.component.html',
  styleUrls: ['./detail-reparation.component.scss']
})
export class DetailReparationComponent implements OnInit {
  detailReparation:Array<any>=new Array()
  reparationId:string;

  constructor(private reparationService:ReparationService,private activatedRoute:ActivatedRoute) {
    this.reparationId=this.activatedRoute.snapshot.params.id;
    this.reparationService.getReparationDetailByReparationId(this.reparationId).subscribe((data:any)=> {

      this.detailReparation=data;
      console.log(data,"eeae")
    })
    
    

  }

  ngOnInit(): void {
  }

}
