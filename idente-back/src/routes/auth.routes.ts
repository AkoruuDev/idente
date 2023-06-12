import { authenticate } from "@/controllers";
import { Router } from "express";

const route = Router();

route.post('/sign-in', authenticate)

export { route as authRoute };