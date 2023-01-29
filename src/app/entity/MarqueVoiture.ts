import { Validators } from "@angular/forms";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input";

export class MarqueVoiture{
    id:string;
    @form({
        label:"Nom de la marque",
        component:TextComponent,
        validator:Validators.required
    })
    marqueName:string;
}