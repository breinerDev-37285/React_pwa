import { Schema,model } from 'mongoose'
import { IUserModel } from '@interface/userModel'
import { hashSync,genSaltSync } from 'bcryptjs'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema<IUserModel>({
    username: {
        type: String,
        required: [true, 'username is neccesary'],
        unique: true,
        uniqueCaseInsensitive: true 
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
},{
    collection: 'users'
})


UserSchema.plugin(uniqueValidator, { message: 'Error, {VALUE} in {PATH} to be unique.' });

UserSchema.pre('save', function( next ){
    const user = this as any
    const salt = genSaltSync(10)
    const hash = hashSync( user.password, salt )
    user.password = hash

    next()
})

export default model<IUserModel>('User', UserSchema)