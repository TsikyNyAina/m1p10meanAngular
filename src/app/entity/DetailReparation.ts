import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent, StarComponent } from "../component/input";

export class DetailReparation{
    id:string;
    reparationId:string;
    @form({
        key:(d:any)=>`${d.marquePieceName}` ,
        value:(d:any)=>d.id,
        component:SelectComponent,
        containerId:"0"
    })
    marquePieceId: string;
    @form({
        component:StarComponent,
        containerId:"1",
        class:"text-start d-flex"
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