import { Request, Response } from 'express'
import User from '@database/models/user'


export const SaveUser = async (req:Request, res:Response) => {
    try {
        const body = req.body
        const user = new User(body)
        await user.save().catch(err => {
            throw {
                status: 404,
                ...err
            }
        })

        return res.json({
            ok: true,
            msg: 'The user was registered'
        })
        
    } catch (error:any) {
        return HandleErrors( error, res)
    }
}

export const GetUsers = async (req:Request, res:Response) => {
    try {
        const users = await User.find({})
        return res.json({
            ok: true,
            users
        })
        
    } catch (error) {
        return HandleErrors( error, res)
    }
}

export const UpdateUser =async (req:Request, res: Response) => {
    try {
        const { id } = req.params   
        const body = req.body

        const user = await User.findByIdAndUpdate(id,body, {
            new: true, 
            runValidators: true
        }).catch(err => {
            throw {
                status: 400,
                ...err
            }
        })

         return res.json({
            ok: true,
            msg: 'User updated',
            user
        })
        
    } catch (error) {
        return HandleErrors(error, res)
    }
}

export const DeleteUser =async (req:Request, res: Response) => {
    try {
        const { id } = req.params

        await User.findByIdAndRemove(id).catch( err => {
            throw {
                status: 400,
                ...err
            }
        })

        return res.json({
            ok: true,
            msg: 'User deleted'
        })
        
    } catch (error) {
        return HandleErrors(error, res)
    }
}

const HandleErrors = (error:any, res:Response) => {
    let status = error.status 
    if( !status ) status = 500 
    return res.status(status).json({ok: false, ...error})
}