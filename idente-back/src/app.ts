import { loadEnv, connectDb } from "./config";
import express, { Express } from "express";
import cors from 'cors';
import { clientRoute, userRoute } from "./routes";

loadEnv()

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('health', (_req, res) => res.send('OK!'))
    .use('/user', userRoute)
    .use('/client', clientRoute)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export default app;