import { ChangeDetectorRef, Component, ComponentFactoryResolver, Injector, Input, QueryList, Type, ViewChildren, ViewContainerRef } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  formControl: FormControl;
  formControlName:string;
  model:any
 



  constructor( private componentFactoryResolver: ComponentFactoryResolver,private cdr:ChangeDetectorRef ) {}
  

  
  ngAfterViewInit(): void {  
      this.viewContainerRefList.changes.subscribe((data:QueryList<ViewContainerRef>)=>data.length>0 && this.displayComponent(data.get(0) as ViewContainerRef))
      this.viewContainerRefList.length>0 && this.displayComponent(this.viewContainerRefList.get(0) as ViewContainerRef)
   
    
  } 
  displayComponent(viewContainerRef:ViewContainerRef){
    if(!this.item?.component) return;
    // if(this.item && this.item.hide===undefined){
    //   console.log("eee");
      
    //   this.item.hide=false
    // }
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
