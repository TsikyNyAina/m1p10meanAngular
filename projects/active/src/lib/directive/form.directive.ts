import { ChangeDetectorRef, ComponentFactoryResolver, ContentChildren, Directive, Input, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormComponent } from '../component/form/form.component';
 
import { Item } from '../type';
import { getItem, getStore } from '../utils';
import { IdentifiantDirective } from './identifiant.directive';

@Directive({
  selector: '[form]'
})
export class FormDirective {
  @ContentChildren(IdentifiantDirective,{read:IdentifiantDirective,descendants:true}) vcr:QueryList<IdentifiantDirective>
  @Input() form:any; 
  formGroup:FormGroup
  keys:Array<string>
  constructor( private componentFactoryResolver: ComponentFactoryResolver ,private renderer:Renderer2,private cdr:ChangeDetectorRef) {}
  ngOnInit(){
    this.keys=getStore(this.form.constructor.prototype)||[]
    const initialValue:any={};
    for(let key of this.keys){ 
      
      const item=getItem(this.form)[key]; 
      initialValue[key]=[this.form[key]||item.value,item.validator]
    }
    this.formGroup=new FormBuilder().group(initialValue)
    
  }





  ngAfterViewInit(){  
        for(let key of this.keys){
          const item=getItem(this.form)[key]; 
          const control=this.formGroup.get(key);
          let v=this.vcr.filter(v=>v.id==item.containerId)[0]  
          if(!v) 
            v=this.vcr.filter(v=>v.id==0)[0]
          if(v){
            const old=Object.getOwnPropertyDescriptor(this.form,key)
            const setter=old?.set
            const getter=old?.get
            const newElement=this.displayComponent(v.viewContainerRef,item,control)
            newElement.instance.formControlName=key
            newElement.instance.model=this.form
            
            let value=undefined as any;
            Object.defineProperty(this.form,key,{
              set:(arg)=>{
                value=arg
                control?.value!=value && control?.setValue(arg)
                setter && setter.bind(this.form)(arg)
              },
              get:()=> {
                return getter?getter.bind(this.form)():value
              },
              configurable:true,
              enumerable:true
            })
  
            this.renderer.appendChild(v.viewContainerRef.element.nativeElement,newElement.location.nativeElement)
  
  
          }
          
        }
        
      this.cdr.detectChanges()


  

  }
  displayComponent(viewContainerRef:ViewContainerRef,item:Item,formControl:any){
     
    const componentFactory=this.componentFactoryResolver.resolveComponentFactory(FormComponent) 
    const componentRef=viewContainerRef.createComponent(componentFactory);
    componentRef.instance.item=item
    componentRef.instance.formControl=formControl
    return componentRef 
    
  }
   

}
