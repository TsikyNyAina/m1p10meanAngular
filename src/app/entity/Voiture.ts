import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent, TextComponent } from "../component/input";

export class Voiture{
    id:string;
    @form({
        label:"Modele",
        key:(d:any)=>{
            return `${d.modelName}  -  ${d.marqueVoiture.marqueName}`
        },
        value:(d:any)=>d.id,
        component:SelectComponent,
        class:"my-2"
    })
    modeleId:string;

    @form({
        label:"Année",
        component:NumberComponent
    })
    year:string;
    @form({
        label:"Numero d'immatriculation",
        component:TextComponent
    })
    number:number;
}