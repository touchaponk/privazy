import {AbstractRouter, HttpRequestMethod} from "../core/AbstractRouter";
import {DSTManager} from "./DSTManager";
import {ErrorObject} from "../utils/ErrorObject";
import express from "express";
export class DSTRouter extends AbstractRouter{
    getCustomRouterPaths(): { path: string; method: HttpRequestMethod; onRequest: (req: express.Request) => Promise<any> }[] {
        return [];
    }
    async onGet(query: any): Promise<any> {
        const industry_id = Number(query.industry);
        if(!industry_id) throw ErrorObject.BAD_REQUEST.cloneWithMessage('Invalid industry id: '+ industry_id);
        return DSTManager.getDSTByIndustry(industry_id);
    }

    async onGetById(id: number): Promise<any> {
        const dst = await DSTManager.getDSTById(id);
        return Promise.resolve(dst);
    }

    async onPost(json: any): Promise<any> {
        throw ErrorObject.METHOD_NOT_ALLOWED;
    }
}