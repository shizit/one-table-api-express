import Router, { Request, Response } from "express";
import { connect } from "../database"
// import Onetable from '../model/Onetable';
import { QueryResult } from "mysql2";

export const tableRouter = Router();


tableRouter.get("/table", (req: Request, res: Response) => {
    getData(req, res);
});

async function getData(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const result = await conn.query("SELECT * FROM onetable");
    return res.json(result[0]);
}

