import { IUser } from '@interface/userModel'
import { GenerateJWT } from './../helpers/jwt'
import { Request, Response } from 'express'
import User from '@database/models/user'
import { ILogin } from '@interface/login'
import SessionModel from '@database/models/session'
import { decode } from 'jsonwebtoken'
import { IJWT } from '@interface/jwt'

export const SaveUser = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const user = new User(body)
        const { username, _id } = await user.save().catch((err) => {
            throw {
                status: 404,
                ...err,
            }
        })

        const token = GenerateJWT({ uid: _id, username })

        await new SessionModel({ token }).save().catch((err) => {
            throw err
        })

        return res.json({
            ok: true,
            token,
            uid: _id,
            username,
        })
    } catch (error: any) {
        return HandleErrors(error, res)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body as ILogin

        const user = await User.findOne({ username })

        if (!user)
            throw {
                status: 404,
                msg: 'user does not exist',
            }

        const isMatch = await user.compareHash(password).catch((err) => {
            throw { status: 400, err }
        })

        if (!isMatch)
            throw {
                status: 400,
                msg: 'invalid username or password',
            }

        const token = GenerateJWT({ uid: user._id, username: user.username })

        await new SessionModel({ token }).save().catch((err) => {
            throw err
        })

        return res.json({
            ok: true,
            token,
            uid: user._id,
            username: user.username,
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const GetUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({}, '-password')
        return res.json({
            ok: true,
            users,
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const refresh = async (req: Request, res: Response) => {
    try {
        const token = req.header('x-token') as string
        const { uid, username } = decode(token) as IJWT
        const newtoken = GenerateJWT({ uid, username })

        const session = await SessionModel.findOneAndUpdate(
            { token },
            { token: newtoken }
        ).catch((err) => {
            throw err
        })

        if (!session) {
            throw {
                status: 404,
            }
        }

        return res.json({
            ok: true,
            token: newtoken,
            uid,
            username,
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const DeleteSession = async (req: Request, res: Response) => {
    try {
        const token = req.header('x-token')

        if (!token)
            throw {
                msg: 'token does not exists',
            }

        await SessionModel.findOneAndRemove({ token }).catch((err) => {
            throw err
        })

        return res.json({
            ok: true,
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const body = req.body
        delete body.password

        const user = await User.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        }).catch((err) => {
            throw {
                status: 400,
                ...err,
            }
        })

        return res.json({
            ok: true,
            msg: 'User updated',
            user,
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        await User.findByIdAndRemove(id).catch((err) => {
            throw {
                status: 400,
                ...err,
            }
        })

        return res.json({
            ok: true,
            msg: 'User deleted',
        })
    } catch (error) {
        return HandleErrors(error, res)
    }
}

const HandleErrors = (error: any, res: Response) => {
    let status = error.status
    if (!status) status = 500
    return res.status(status).json({ ok: false, ...error })
}
