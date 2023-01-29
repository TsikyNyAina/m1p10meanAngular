import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent, TextComponent } from "../component/input";
import { ClientService } from "../page/client/client.service";

export class Voiture{

    @form({
        label:"Modele Voiture",
        key:(d:any)=>{
            const model=d.marqueVoiture;
            return `${model.marqueName} ${d.modelName}`
        },
        value:(d:any)=>d.id,
        component:SelectComponent,
        data: (d:any)=>d
    })
    modelId:string;

    

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