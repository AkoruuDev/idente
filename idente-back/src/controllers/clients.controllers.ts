import { Request, Response } from "express";
import httpStatus = require("http-status");

function getClient(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function getClientById(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function createClient(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function updateClient(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

function deleteClient(req: Request, res: Response) {
    res.status(httpStatus.OK).send('Ok')
};

export {
    getClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}