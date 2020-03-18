import express from "express";
import {Log} from "./utils/Log";

export class App{
    private static app : express.Application = express();
    static init(){
        const port : number = Number(process.env.PORT) || 3000;
        this.app.listen(port, ()=>{
            Log.debug("App is now running on port "+port);
        });
        this.bindRouters();
    }
    private static bindRouters(){
        this.app.use('/workflows', )
    }
}
App.init();