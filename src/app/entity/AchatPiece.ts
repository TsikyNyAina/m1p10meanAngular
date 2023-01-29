import { form } from "projects/active/src/lib/utils";
import { NumberComponent, SelectComponent } from "../component/input";
import { DateComponent } from "../component/input/date/date.component";
import { MarquePiece } from "./MarquePiece";

export class AchatPiece{
    id:string;
    @form({
        label:"Marque de la pièce",
        key:(d:any)=>d.marquePieceName,
        value:(d:any)=>d.id,
        component:SelectComponent
    })
    marquePieceId:string;
    @form({
        label:"Date d'Achat",
        component:DateComponent
    })
    dateAchatPiece:Date;
    @form({
        label:"Quantité",
        component:NumberComponent
    })
    quantity:number;
    @form({
        label:"Prix Unitaire",
        component:NumberComponent
    })
    prixUnitaire:number;
    marquePiece:MarquePiece
}