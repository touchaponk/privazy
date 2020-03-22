import express, {Request} from "express";
import {AbstractRouter, HttpRequestMethod} from "../../core/AbstractRouter";
import {ErrorObject} from "../../utils/ErrorObject";
import {WorkflowManager} from "../WorkflowManager";
export class DatafieldRouter extends AbstractRouter{
    async onGet(query: any): Promise<any> {
        const business_id = Number(query.industry);
        if(!business_id) throw ErrorObject.BAD_REQUEST.cloneWithMessage('Invalid business id: '+ business_id);
        return WorkflowManager.getWorkflowByBusinessId(business_id);
    }

    async onGetById(id: number): Promise<any> {
        const wf = await WorkflowManager.getWorkflowById(id);
        return Promise.resolve(wf);
    }

    async onPost(json: any): Promise<any> {
        throw ErrorObject.METHOD_NOT_ALLOWED;
    }
    onTemplateRequest = async (req: Request) : Promise<any> => {
        const industry_id = Number(req.query.industry);
        const dst_id = Number(req.query.dst);
        if(!industry_id) throw ErrorObject.BAD_REQUEST.cloneWithMessage('Invalid industry id: '+ industry_id);
        if(!dst_id) throw ErrorObject.BAD_REQUEST.cloneWithMessage('Invalid dst id: '+ dst_id);
        return WorkflowManager.getWorkflowTemplates(industry_id, dst_id);
    }
    getCustomRouterPaths(): { path: string; method: HttpRequestMethod; onRequest: (req: express.Request) => Promise<any> }[] {
        return [{path:'/templates', onRequest: this.onTemplateRequest, method:'get'}];
    }
}