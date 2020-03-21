import {Request, Response, Router} from "express";
import express from "express";
import {ErrorObject} from "../utils/ErrorObject";
import {Log} from "../utils/Log";
export type HttpRequestMethod = "get" | "post" | "put" | "delete" | "patch" | "all";
export abstract class AbstractRouter{

    public readonly router: Router = express.Router();
    abstract async onPost(json : any) : Promise<any>;
    abstract async onGetById(id: number) : Promise<any>;
    abstract async onGet(query: any) : Promise<any>;
    abstract getCustomRouterPaths() : {
        path: string,
        method: HttpRequestMethod,
        onRequest: (req: Request) => Promise<any>
    }[];
    init() : express.Router{
        // Custom router has higher priority
        this.getCustomRouterPaths().forEach(customPath=>{
            this.router[customPath.method](customPath.path, (req: Request, res: Response)=>{
                return this.handleCustomPathRequest(req, res, customPath.onRequest);
            })
        });

        this.router.post('/', this.handlePost);
        this.router.get('/', this.handleGet);
        this.router.get('/:id', this.handleGetById);
        return this.router;
    }
    private handleCustomPathRequest = async (req: Request, res: Response,
                                             onRequest: (req: Request) => Promise<any>) => {
        try{
            const time = Date.now();
            const json = await onRequest(req);
            Log.debug("Request "+req.method+" "+req.url+' handled in '+(Date.now()-time)+'ms with response: ',json);
            res.json(json);
        }
        catch(err){
            this.handleError(err, req, res);
        }
    }
    private handlePost = async (req: Request, res: Response) => {
        try{
            const time = Date.now();
            if(!req.body || !Object.keys(req.body) || !Object.keys(req.body).length){
                throw ErrorObject.BAD_REQUEST.cloneWithMessage("Bad request body: " + JSON.stringify(req.body));
            }
            const json = await this.onPost(req.body);
            Log.debug("Request "+req.method+" "+req.url+' handled in '+(Date.now()-time)+'ms with response: ',json);
            res.json(json);
        }
        catch(err){
            this.handleError(err, req, res);
        }
    }
    private handleGet = async (req: Request, res: Response) => {
        try{
            const time = Date.now();
            const json = await this.onGet(req.query);
            Log.debug("Request "+req.method+" "+req.url+' handled in '+(Date.now()-time)+'ms with response: ',json);
            res.json(json);
        }
        catch(err){
            this.handleError(err, req, res);
        }
    }
    private handleGetById = async(req: Request, res: Response) =>{
        try{
            const id = Number(req.params.id);
            if(!id) throw ErrorObject.BAD_REQUEST.cloneWithMessage("Invalid ID: "+req.params.id);
            else{
                const time = Date.now();
                const json = await this.onGetById(id);
                res.json(json);
                Log.debug("Request "+req.method+" "+req.url+' handled in '+(Date.now()-time)+'ms with response: ',json);
            }
        }
        catch(err){
            this.handleError(err, req, res);
        }
    }
    private handleError(err: Error, req: Request, res : Response){
        Log.error("Error while handling "+req.method+" ", req.url," with body ",req.body,": ",err.stack);
        if(err instanceof ErrorObject){
            err.send(res);
        }
        else{
            ErrorObject.INTERNAL_ERROR.send(res);
        }
    }

}