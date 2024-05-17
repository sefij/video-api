import { NextFunction, Request, Response } from 'express'
import { Config } from '../../config'
import { UnauthorizedError } from '../../Models/Errors'
import { JwtPayload, decode } from 'jsonwebtoken'

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
    try {
        const token = req.headers.authorization.split('Bearer ')[1]
        const decoded: JwtPayload = decode(token) as JwtPayload
        console.log(`JWT decoded successfully, ${decoded.name}`)
    } catch (err) {
        sendUnauthorized(res)
    }
    next()
}
