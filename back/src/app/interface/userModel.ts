import { Document } from 'mongoose'

export interface IUser {
    username: string
    password: string
    email: string
}

export interface IUserModel extends IUser, Document {
    compareHash: (pass: string) => Promise<any>
}
