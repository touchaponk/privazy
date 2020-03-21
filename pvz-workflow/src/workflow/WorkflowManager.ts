import {DatabaseManager} from "../core/DatabaseManager";
import {Log} from "../utils/Log";
import {WorkflowModel, WorkflowModelJson} from "./WorkflowModel";

export class WorkflowManager {
    private static TABLE: string = 'workflow';
    public static async getWorkflowById(dstId: number): Promise<WorkflowModel> {
        const resultJson = (await DatabaseManager.getInstance().get(WorkflowManager.TABLE, dstId)) as WorkflowModelJson;
        const biz = new WorkflowModel(resultJson);
        return biz;
    }

    public static async getWorkflowByBusinessId(business_id: number): Promise<WorkflowModel[]> {
        const resultJson = (await DatabaseManager.getInstance()
            .query(
                `select * from workflow where business_id = ${business_id}`
            )) as WorkflowModelJson[];
        return resultJson.map((json) => {
            return new WorkflowModel(json);
        });
    }
    public static async getWorkflowTemplates(industry_id: number, dst_id: number): Promise<WorkflowModel[]> {
        const resultJson = (await DatabaseManager.getInstance()
            .query(
                `select workflow.id, workflow.title, workflow.link_id, \
                            workflow.notice_id, workflow.business_id, workflow.dst_id \
                    from workflow inner join business on business.id = workflow.business_id where \
                    business.industry_id = ${industry_id} and business.is_template = 1 and workflow.dst_id = ${dst_id}`
            )) as WorkflowModelJson[];
        return resultJson.map((json) => {
            return new WorkflowModel(json);
        });
    }
}