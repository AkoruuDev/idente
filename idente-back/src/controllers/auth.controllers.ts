import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import authenticationService from '@/services/auth.services';

async function authenticate(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
        const response = await authenticationService.signIn({ email, password });

        return res.status(httpStatus.OK).send(response)
    } catch (e) {
        return res.send(httpStatus.UNAUTHORIZED).send({});
    }
    
    next();
};

export {
    authenticate
}