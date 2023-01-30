import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { DetailReparationService, ReparationService } from '../../service';

@Component({
  selector: 'app-detail-reparation',
  templateUrl: './detail-reparation.component.html',
  styleUrls: ['./detail-reparation.component.scss']
})
export class DetailReparationComponent implements OnInit {
  detailReparation:Array<any>=new Array()
  reparationId:string;

  constructor(
    private reparationService:ReparationService,
    private activatedRoute:ActivatedRoute,
    private detailReparationService:DetailReparationService
  ) {
    this.reparationId=this.activatedRoute.snapshot.params.id;
    this.detailReparationService.getReparationDetailByReparationId(this.reparationId).subscribe((data:any)=> this.detailReparation=data)
    
    

  }

  ngOnInit(): void {
  }

}
