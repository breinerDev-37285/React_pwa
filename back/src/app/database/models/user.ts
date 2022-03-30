import { Schema, model } from 'mongoose'
import { IUserModel } from '@interface/userModel'
import { hashSync, genSaltSync, compare } from 'bcryptjs'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema<IUserModel>(
    {
        username: {
            type: String,
            required: [true, 'username is neccesary'],
            unique: true,
            uniqueCaseInsensitive: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'the email is neccesary'],
        },
    },
    {
        collection: 'users',
    }
)

UserSchema.plugin(uniqueValidator, {
    message: 'Error, {VALUE} in {PATH} to be unique.',
})

UserSchema.pre('save', function (next) {
    const user = this as any
    const salt = genSaltSync(10)
    const hash = hashSync(user.password, salt)
    user.password = hash

    next()
})

UserSchema.methods.compareHash = function (pass: string): Promise<any> {
    const user = this as any
    return new Promise((resolve, reject) => {
        compare(pass, user.password, (err, isMatch) => {
            if (err) reject(err)
            resolve(isMatch)
        })
    })
}

export default model<IUserModel>('User', UserSchema)
