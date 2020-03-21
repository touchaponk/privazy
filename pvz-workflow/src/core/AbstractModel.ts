import {BusinessModelJson} from "../business/BusinessModel";

export interface AbstractModelJson{
    id: number
}
export class AbstractModel{
    private id : number;
    constructor(json: AbstractModelJson) {
        this.id = json.id;
    }
}