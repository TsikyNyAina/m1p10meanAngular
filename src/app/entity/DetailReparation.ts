import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent } from "../component/input";

export class DetailReparation{
    reparationId:string;
    @form({
        key:(d:any)=>`${d.marquePieceName}` ,
        value:(d:any)=>d.id,
        component:SelectComponent,
        containerId:"0"
    })
    marquePieceId: string;
    @form({
        component:NumberComponent,
        containerId:"1"
    })
    etat:number;
    @form({
        component:NumberComponent,
        containerId:"2"
    })
    quantity: number;
    @form({
        component:NumberComponent,
        containerId:"3"
    })
    cost: number;
}