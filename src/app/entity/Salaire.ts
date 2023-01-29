import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent } from "../component/input";
import { DateComponent } from "../component/input/date/date.component";
import { Responsable } from "./Responsable";

export class Salaire{
    id:string;
    @form({
        label:"DatePaiement",
        component:DateComponent,
        class:"my-2"
    })
    datePayement: Date;
    @form({
        label:"Mois",
        component:DateComponent,
        class:"my-2"
    })
    mois:Date;
    @form({
        label:"Montant",
        component:NumberComponent,
        class:"my-2"
    })
    montant: number;
    @form({
        label:"Responsable",
        component:SelectComponent,
        key:(d:any)=>d.name,
        value:(d:any)=>d.id,
        class:"my-2"
    })
    responsableId: string;
    responsable:Responsable;
}