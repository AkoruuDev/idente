import { getClients, getClientById, createClient, updateClient, deleteClient } from "@/controllers";
import { Router } from "express";

const route = Router();

route.get("/", getClients);
route.get("/:id", getClientById);
route.post("/", createClient);
route.put("/:id", updateClient);
route.delete("/:id", deleteClient);

export { route as clientRoute };