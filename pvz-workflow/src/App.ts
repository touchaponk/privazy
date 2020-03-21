import express from "express";
import {Log} from "./utils/Log";
import {BusinessRouter} from "./business/BusinessRouter";
import bodyParser from "body-parser";
import {DSTRouter} from "./dst/DSTRouter";
import {WorkflowRouter} from "./workflow/WorkflowRouter";

export class App{
    private static app : express.Application = express();
    static init(){
        const port : number = Number(process.env.PORT) || 3000;
        this.app.use(bodyParser.json({limit: '500mb'}));
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' }));
        this.app.listen(port, ()=>{
            Log.debug("App is now running on port "+port);
        });
        this.bindRouters();
    }
    private static bindRouters(){
        this.app.use('/businesses', new BusinessRouter().init());
        this.app.use('/dst', new DSTRouter().init());
        this.app.use('/workflows', new WorkflowRouter().init());
    }
}
App.init();