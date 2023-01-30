import { form } from "projects/active/src/lib/utils";
import { NumberComponent } from "../component/input";
import { DateComponent } from "../component/input/date/date.component";
import { Reparation } from "./Reparation";

export class Payement{
    reparationId:string; 
    @form({
        component:DateComponent,
        label:"Date Payement"
    })
    datePayement:Date
    @form({
        component:NumberComponent,
        label:"Montant"
    })
    montant:number
    reparation:Reparation;
}