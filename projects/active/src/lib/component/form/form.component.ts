import { Component, ComponentFactoryResolver, Injector, Input, QueryList, Type, ViewChildren, ViewContainerRef } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Data, Item } from '../../type';








@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  viewProviders: [
      {
          provide: ControlContainer,
          useExisting: FormGroupDirective
      }
  ] ,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormComponent
    }
  ]
})
export class FormComponent{
  @ViewChildren("vcr",{read:ViewContainerRef}) viewContainerRefList: QueryList<ViewContainerRef> 
  @Input() item:Item;
  control: NgControl;






  constructor( private componentFactoryResolver: ComponentFactoryResolver ) {}
  
  
  
  ngAfterViewInit(): void { 
    
    setTimeout(()=>{
      this.viewContainerRefList.changes.subscribe((data:QueryList<ViewContainerRef>)=>data.length>0 && this.displayComponent(data.get(0) as ViewContainerRef))
      this.viewContainerRefList.length>0 && this.displayComponent(this.viewContainerRefList.get(0) as ViewContainerRef)
    },10)
  } 
  displayComponent(viewContainerRef:ViewContainerRef){
    if(!this.item?.component) return;
    const componentFactory=this.componentFactoryResolver.resolveComponentFactory(this.item.component)
    const injector=Injector.create([
      {provide:NgControl,useValue:this.control},
      {provide:Data,useValue:{data:this.item.data}},
    ])
    viewContainerRef.createComponent(componentFactory,undefined,injector)
    
  }

}
