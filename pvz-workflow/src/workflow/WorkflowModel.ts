import {AbstractModel, AbstractModelJson} from "../core/AbstractModel";

export interface WorkflowModelJson extends AbstractModelJson{
    title: string,
    link_id: string,
    notice_id : number,
    business_id: number
}
export class WorkflowModel extends AbstractModel{
    private title : string;
    private link_id: string;
    private notice_id : number;
    private business_id : number;
    constructor(json: WorkflowModelJson) {
        super(json);
        this.title = json.title;
        this.link_id = json.link_id;
        this.notice_id = json.notice_id;
        this.business_id = json.business_id;
    }
}