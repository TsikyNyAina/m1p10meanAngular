import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent, TextComponent } from "../component/input";

export class Reparation{
    @form({
        label:"Voiture",
        key:(d:any)=>{
            const model=d.modelVoiture;
            return `${d.numero}  -  ${model.marqueVoiture.marqueName} ${model.modelName}`
        },
        value:(d:any)=>d.id,
        component:SelectComponent
    })
    voitureId:string;
    @form({
        label:"Avancement",
        component:NumberComponent
    })
    avancement:number=0;
    @form({
        label:"Prix",
        component:NumberComponent
    })
    cost:number;
    @form({
        label:"Description",
        component:TextComponent
    })
    description:string="hahahah";
}