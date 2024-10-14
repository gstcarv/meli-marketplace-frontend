import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err?.status || 500;
    const message = err?.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: statusCode,
        message,
        path: req.path
    });
};
