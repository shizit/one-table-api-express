import Router, { Request, Response } from "express";
import { connect } from "../database"
import Onetable from '../models/onetable';
import { QueryResult } from "mysql2";

export const tableRouter = Router();


tableRouter.get("/table", (req: Request, res: Response) => {
    getData(req, res);
});

tableRouter.post("/table", (req: Request, res: Response) => {
    registerData(req, res);
});

tableRouter.put("/table", (req: Request, res: Response) => {
    updateData(req, res);
});

tableRouter.delete("/table", (req: Request, res: Response) => {
    deleteData(req, res);
});

async function getData(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const result = await conn.query("SELECT * FROM onetable");
    return res.json(result[0]);
}

async function registerData(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const registerData: Onetable = req.body;
    await conn.query(`INSERT INTO onetable SET ?`, [registerData.data])
    return res.json({
        message: "Onetable registered"
    });
}

async function updateData(req: Request, res: Response) {
    const conn = await connect();
    const updateData: Onetable = req.body;
    await conn.query(`UPDATE onetable SET ? WHERE id = ?`, [updateData.data, updateData.id])
    return res.json({
        message: "Onetable updated"
    })

}

async function deleteData(req: Request, res: Response) {
    const conn = await connect();
    const deleteId = req.query.id;
    await conn.query(`DELETE FROM onetable WHERE id = ?`, [deleteId]);
    return res.json({
        message: "Data deleted"
    })
}