import { NextFunction, Response, Request } from 'express'
import { StatusError } from '../../Models/Errors'

export const ErrorHandler = (
    err: StatusError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = Number(err.code ?? '500')

    res.status(statusCode).json({
        error: err.message,
        stack: err.stack
    })
}
