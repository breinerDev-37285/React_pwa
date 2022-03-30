import { Document } from 'mongoose'

export interface ISession {
    token: string
}

export interface ISessionDoc extends ISession, Document {}
