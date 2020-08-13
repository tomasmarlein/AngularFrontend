import { Choice } from "./choice.model"
import { Invited } from './invited.model';
export class Poll {

    constructor( public topic: string, public userId: string, public choices: Choice[],public _id?: string){
    
    }
    
}
