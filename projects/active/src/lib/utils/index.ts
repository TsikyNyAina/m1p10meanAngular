import { isArray, isPlainObject } from "is-what";
import { Item } from "../type";

const map=new Map();
 
export function form(item:Item){
    return function(target:any,methodName:string){
        map.set(target,map.get(target)||{}).get(target)[methodName]=item 
    }
}

export function getStaticItem(target:any){
    return map.get(target)
}
export function getStore(target:any){
    return Object.keys(map.get(target)||{})
}


const mapObject=new Map();

export function getItem(target:any){
    const staticValue= map.get(target.constructor.prototype)
    
    return mapObject.set(target,mapObject.get(target)||copy(staticValue)) .get(target)
     
}

export function copy (target:any):any {
    if (isArray(target)) return target.map((i:any) => copy(i))
    if (!isPlainObject(target)) return target
    return Object.keys(target)
    .reduce((carry:any, key) => {
    const val = target[key]
    carry[key] = copy(val)
    return carry
    }, {})
}

