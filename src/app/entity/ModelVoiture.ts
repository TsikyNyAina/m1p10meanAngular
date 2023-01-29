import { Validators } from "@angular/forms";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input";

export class ModelVoiture{
    id:string;
    marqueVoitureId:string;
    @form({
        placeholder:"Nom de la marque",
        component:TextComponent,
        validator:Validators.required
    })
    modelName:string;

}