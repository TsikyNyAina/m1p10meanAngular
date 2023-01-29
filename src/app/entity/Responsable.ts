import { Validators } from "@angular/forms";
import { Item } from "projects/active/src/lib/type";
import { form } from "projects/active/src/lib/utils";
import { TextComponent } from "../component/input/text/text.component";

export class Responsable{
    getItem:Function
    id:string;
    @form({component:TextComponent,containerId:"1",label:"Name" ,validator:Validators.required}) name:string;
    @form({component:TextComponent ,containerId:"2",label:"Email" ,validator:[Validators.required,Validators.email]}) email:string;
    @form({component:TextComponent,containerId:"3",label:"Mdp",validator:Validators.required}) mdp:string;
    @form({component:TextComponent,containerId:"4",label:"Numero de telephone",validator:Validators.required}) phoneNumber:string;

    isValid() {
        return this.name && this.email && this.email.includes('@') && this.mdp && this.phoneNumber;
    }

    isValid1() {
        return this.email && this.email.includes('@') && this.mdp;
    }

    isValidMail() {
        return this.email && this.email.includes('@');
    }
}