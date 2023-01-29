import { Validators } from "@angular/forms";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input";
import { SelectComponent } from "../component/input";
import { ModelVoiture } from "./ModelVoiture";

export class MarquePiece{
    id:string;
    @form({
        label:"Nom de la marque",
        component:TextComponent,
        validator:Validators.required
    })
    marquePieceName:string;

    @form({
        label:"Pour tous model de voiture",
        component:TextComponent
    })
    touteModelVoiture:boolean ;

    @form({
        label:"Modele",
        key:(d:any)=>{
            return `${d.modelName}  -  ${d.marqueVoiture.marqueName}`
        },
        value:(d:any)=>d.id,
        component:SelectComponent,
        class:"my-2"
    })
    modelVoiture:ModelVoiture[];
}