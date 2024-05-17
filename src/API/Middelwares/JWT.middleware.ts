import { NextFunction, Request, Response } from 'express'
import { Config } from '../../config'

export const JWTMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const sendUnauthorized = (res: Response) => {
        res.status(401).json({
            status: 401,
            message: 'You anre not authorized to perform this specific action'
        })
    }
    if (Config.DISABLE_JWT_VALIDATION) {
        return next()
    }
    next()
}
