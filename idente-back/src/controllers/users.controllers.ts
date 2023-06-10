import { Request, Response } from "express";
import httpStatus = require("http-status");

function getUser(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function createUser(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function updateUser(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function deleteUser(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

export {
    getUser,
    createUser,
    updateUser,
    deleteUser
}