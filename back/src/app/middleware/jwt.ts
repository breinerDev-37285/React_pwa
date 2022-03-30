import { verify } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import SessionModel from '@database/models/session'

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const SEED = process.env.SEED
    const token = req.header('x-token')

    if (!token)
        return res.status(500).json({
            ok: false,
            msg: 'token does not exists',
        })

    verify(token, String(SEED), async (err) => {
        if (err && err.name !== 'TokenExpiredError') {
            await SessionModel.findOneAndRemove({ token })
            return res.status(400).json({
                ok: false,
                err,
            })
        }

        next()
    })
}
