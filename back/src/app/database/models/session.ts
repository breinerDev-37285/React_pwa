import { ISessionDoc } from './../../interface/session'
import { Schema, model } from 'mongoose'

const sessionSchema = new Schema<ISessionDoc>({
    token: {
        type: String,
        required: [true, 'which is the token'],
    },
})

export default model<ISessionDoc>('Session', sessionSchema)
