import Router, { Request, Response } from "express";

export const tableRouter = Router();

tableRouter.get("/table", (req: Request, res: Response) => {
    res.send("table api");
});