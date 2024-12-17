// import { NextFunction, Request } from "express";

// export const CatchAsyncError= (theFunc:any) => (req:Request,res:Response,next:NextFunction) => {
//         Promise.resolve(theFunc(req,res,next)).catch(next);

// };

import { RequestHandler } from 'express';

export const CatchAsyncError = (fn: RequestHandler): RequestHandler => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
