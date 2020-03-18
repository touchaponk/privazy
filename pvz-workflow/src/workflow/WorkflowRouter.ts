import {Router} from "express";
import express from "express";
export class WorkflowRouter{

    public static readonly router: Router = express.Router();
    static init(){
        this.router.get('/')
    }
}
WorkflowRouter.init();