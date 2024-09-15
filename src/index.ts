import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { indexRouter } from './routes/index';
import { tableRouter } from './routes/table';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(indexRouter);
app.use(tableRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});