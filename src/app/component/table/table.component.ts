import { ChangeDetectorRef, Component, ContentChild, ContentChildren, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BodyDirective } from 'src/app/directive/body.directive';
import { HeaderDirective } from 'src/app/directive/header.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {
  @ViewChild("header",{read:ViewContainerRef}) header:ViewContainerRef
  @ViewChild("body",{read:ViewContainerRef}) body:ViewContainerRef
  
  @ContentChild(HeaderDirective) headerTemplate!: HeaderDirective;
  @ContentChild(BodyDirective ) bodyTemplate!: BodyDirective;


  data:Array<any>=new Array()
  constructor(private cdr:ChangeDetectorRef) { }
  
  

  ngAfterViewInit(){
    
    
    this.header.createEmbeddedView(this.bodyTemplate.templateRef,{i:"sdqsdqsdsqsdqsd",$implicit:"zzeazeaze"})
    this.cdr.detectChanges()
    
    
  }
  
}
