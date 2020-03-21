import {AbstractModel, AbstractModelJson} from "../core/AbstractModel";

export interface DSTModelJson extends AbstractModelJson{
    title: string,
    description: string
}
export class DSTModel extends AbstractModel{
    private title : string;
    private description: string;
    constructor(json: DSTModelJson) {
        super(json);
        this.title = json.title;
        this.description = json.description;
    }
}