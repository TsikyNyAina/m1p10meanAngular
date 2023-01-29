import { Type } from "@angular/core";

export declare type Item={
    component:Type<any>;
    hide?:boolean;
    label?:string;
    data?:any;
}
export class Data{
    data:any
}