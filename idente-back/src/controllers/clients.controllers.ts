import { Request, Response } from "express";
import httpStatus from "http-status";

function getClients(req: Request, res: Response) {
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
    getClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}