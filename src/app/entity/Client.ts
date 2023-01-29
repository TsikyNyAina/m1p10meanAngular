import { Validators } from "@angular/forms";
import { Item } from "projects/active/src/lib/type";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input/text/text.component";







export class Client{
    getItem:Function
    id:string;
    @form({component:TextComponent,containerId:"1",label:"Name" ,validator:Validators.required}) name:string;
    @form({component:TextComponent ,containerId:"2",label:"Email" }) email:string;
    @form({component:TextComponent}) mdp:string;
    @form({component:TextComponent}) address:string;
    @form({component:TextComponent}) phoneNumber:string;
}