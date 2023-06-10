import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "@/controllers";

const route = Router();

route.get('/', getUser); // take infos to profile
route.post('/', createUser);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

export { route as userRoute };