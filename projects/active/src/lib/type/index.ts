import { Type } from "@angular/core";
interface AnyProperties {
    [prop: string]: any
}
export declare type Item=AnyProperties & {
    component:Type<any>;
    hide?:boolean;
    label?:string;
    data?:any;
    containerId?:any;
    validator?:any;
    key?:any
};
export class Data{
    
}