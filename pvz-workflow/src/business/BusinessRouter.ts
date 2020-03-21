import {BusinessManager} from "./BusinessManager";
import {AbstractRouter, HttpRequestMethod} from "../core/AbstractRouter";
import {ErrorObject} from "../utils/ErrorObject";
import express from "express";

export class BusinessRouter extends AbstractRouter{
    getCustomRouterPaths(): { path: string; method: HttpRequestMethod;
                    onRequest: (req: express.Request) => Promise<any> }[] {
        return [];
    }
    async onGet(query: any): Promise<any> {
        throw ErrorObject.METHOD_NOT_ALLOWED;
    }
    async onGetById(id: number): Promise<any> {
        const biz = await BusinessManager.getBusinessById(id);
        return Promise.resolve(biz);
    }

    async onPost(json: any): Promise<any> {
        const biz = await BusinessManager.createNewBusiness(json);
        return Promise.resolve(biz);
    }
}