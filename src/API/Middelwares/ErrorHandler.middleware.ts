import { NextFunction, Response, Request } from 'express'
import { StatusError } from '../../Models/Errors'

export const ErrorHandler = (
    err: StatusError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    let statusCode = Number(err.code ?? '500')

    if (err.name === 'ValidateError') {
        statusCode = 400
        err.message = 'Invalid input'
    }
    res.status(statusCode).json({
        error: err.message,
        stack: err.stack
    })
}
