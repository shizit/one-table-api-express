import Router, { Request, Response } from "express";
import { connect } from "../database"
import Onetable from '../models/onetable';
import { QueryResult } from "mysql2";

export const tableRouter = Router();


tableRouter.get("/table", (req: Request, res: Response) => {
    getData(req, res);
});

tableRouter.put("/table", (req: Request, res: Response) => {
    updateData(req, res);
});

async function getData(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const result = await conn.query("SELECT * FROM onetable");
    return res.json(result[0]);
}

async function updateData(req: Request, res: Response) {
    console.debug(req);
    const updateData: Onetable = req.body;
    console.debug(updateData);
    const id = updateData.id;
    console.debug("ids:" + id)
    const conn = await connect();
    await conn.query(`UPDATE onetable SET ? WHERE id = ?`, [updateData.data, id])
    return res.json({
        message: "Onetable updated"
    })
}

