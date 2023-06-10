import { NextFunction, Request, Response } from "express";

function authenticate(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    next();
};

export {
    authenticate
}