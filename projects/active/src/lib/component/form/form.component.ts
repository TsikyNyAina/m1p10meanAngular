import { ChangeDetectorRef, Component, ComponentFactoryResolver, HostBinding, Injector, Input, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Data, Item } from '../../type';








@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], 
})
export class FormComponent{
  @ViewChildren("vcr",{read:ViewContainerRef}) viewContainerRefList: QueryList<ViewContainerRef> 
  @Input() item:Item;
  formControl: FormControl;
  formControlName:string;
  model:any
  @HostBinding("class") class:string;



  constructor( private componentFactoryResolver: ComponentFactoryResolver,private cdr:ChangeDetectorRef ) {}
  

  
  ngAfterViewInit(): void {  
      this.viewContainerRefList.changes.subscribe((data:QueryList<ViewContainerRef>)=>data.length>0 && this.displayComponent(data.get(0) as ViewContainerRef))
      this.viewContainerRefList.length>0 && this.displayComponent(this.viewContainerRefList.get(0) as ViewContainerRef)
      
    } 
  displayComponent(viewContainerRef:ViewContainerRef){
    if(!this.item?.component) return;
    setTimeout(() => {
      this.class=this.item.class
    }, 10); 
    const componentFactory=this.componentFactoryResolver.resolveComponentFactory(this.item.component)
    const injector=Injector.create([
      {provide:Data,useValue: this.item },
    ])
    const componentRef=viewContainerRef.createComponent(componentFactory,undefined,injector)
    componentRef.instance.formControl=this.formControl  
    this.formControl.valueChanges.subscribe((m:any)=>{
      this.model[this.formControlName]=m
      this.cdr.detectChanges()
    }) 
    this.cdr.detectChanges()
  }

}
