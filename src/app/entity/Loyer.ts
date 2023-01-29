import { Validators } from "@angular/forms";
import { Item } from "projects/active/src/lib/type";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input/text/text.component";
import { DateComponent } from "../component/input/date/date.component";
import { NumberComponent } from "../component/input";

export class Loyer{
    getItem:Function
    
    id:string;
    @form({component:DateComponent,containerId:"1",label:"Date de payement" ,validator:Validators.required}) datePayement:Date;
    @form({component:NumberComponent ,containerId:"2",label:"Montant" ,validator:Validators.required}) montant:Number;
    @form({component:DateComponent,containerId:"3",label:"Mois",validator:Validators.required}) mois:Date;
    
}