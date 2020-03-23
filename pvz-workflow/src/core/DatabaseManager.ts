import mariadb, {Pool, PoolConnection} from "mariadb";
import {Log} from "../utils/Log";
import {AbstractModel, AbstractModelJson} from "./AbstractModel";

interface InsertResponseJson {
    affectedRows: number,
    insertId: number,
    warningStatus: number
}

export class DatabaseManager {
    private static _instance: DatabaseManager;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new DatabaseManager();
        }
        return this._instance;
    }

    private pool: Pool;

    private constructor() {
        const config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            ssl: {
                rejectUnauthorized: false
            },
            connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10
        };
        Log.debug("Creating database pool with config: ", config);
        this.pool = mariadb.createPool(config);
    }

    public async query(query: string) : Promise<InsertResponseJson | any[]> {
        const time = Date.now();
        Log.debug("Executing query: " + query);
        let connection: PoolConnection;
        try {
            connection = await this.pool.getConnection();
            const json = await connection.query(query);
            Log.debug("Execution of query " + query + " completed in " + (Date.now() - time));
            return json;
        } catch (err) {
            Log.error("Error while executing query " + query + ", Error: " + err);
            throw err;
        } finally {
            // @ts-ignore
            if (connection) connection.release();
        }
    }

    // Insert data into database and return its new ID
    public async insert(table: string, json: any): Promise<number> {
        const keys = Object.keys(json).join(',');
        const values = Object.values(json).map(val => {
            if (typeof (val) == 'number') return val;
            else return "'" + val + "'";
        })
        const query = `INSERT INTO ${table}(${keys}) VALUES (${values})`;
        const response: InsertResponseJson = await this.query(query) as InsertResponseJson;
        return response.insertId;
    }

    public async get(table: string, id: number): Promise<AbstractModelJson> {
        const query = `SELECT * FROM ${table} where id = ${id}`;
        const response: any[] = await this.query(query) as any[];
        return response[0];
    }
    public async getByFilter(table: string, whereString: string): Promise<AbstractModelJson[]> {
        const query = `SELECT * FROM ${table} WHERE ${whereString}`;
        const response: any[] = await this.query(query) as any[];
        return response;
    }
}