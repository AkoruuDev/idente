import { loadEnv, connectDb } from "./config";
import express, { Express } from "express";

loadEnv()

const app = express();

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export default app;