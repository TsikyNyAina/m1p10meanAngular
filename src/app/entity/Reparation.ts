import { InlineFormComponent } from "projects/active/src/lib/component/inline-form/inline-form.component"; 
import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent, StarComponent, TextComponent } from "../component/input";
import { DateComponent } from "../component/input/date/date.component";
import { DetailReparation } from "./DetailReparation";

export class Reparation{
    id:string;
    reparationDetail:DetailReparation[]
    @form({
        label:"Voiture",
        key:(d:any)=>{
            const model=d.modelVoiture;
            return `${d.numero}  -  ${model.marqueVoiture.marqueName} ${model.modelName}`
        },
        value:(d:any)=>d.id,
        component:SelectComponent,
        class:"my-2"
    })
    voitureId:string;
    @form({
        label:"Avancement",
        component:StarComponent,
        template:InlineFormComponent,
        class:"my-2"
    })
    avancement:number=0;
    @form({
        label:"Prix",
        component:NumberComponent,
        class:"my-2"
    })
    cost:number;
    @form({
        label:"Description",
        component:TextComponent,
        class:"my-2"
    })
    description:string ;

    @form({
        label:"EtartDate",
        component:DateComponent,
        class:"my-2"
    })
    startDate:Date;
    @form({
        label:"End Date",
        component:DateComponent,
        class:"my-2"
    })
    endDate:Date;
}