import {AbstractModel, AbstractModelJson} from "../core/AbstractModel";

export interface BusinessModelJson extends AbstractModelJson{
    title: string,
    industry_id: number
}
export class BusinessModel extends AbstractModel{
    private title : string;
    private industry_id : number;
    constructor(json: BusinessModelJson) {
        super(json);
        this.title = json.title;
        this.industry_id = json.industry_id;
    }
}