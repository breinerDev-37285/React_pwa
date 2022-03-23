import { Schema,model,Model } from 'mongoose'
import { IUserModel } from '@interface/userModel'

const UserSchema = new Schema<IUserModel, Model<IUserModel>, IUserModel>({
    username: {
        type: String,
        required: [true, 'username is neccesary']
    },
    pasword: {
        type: String,
        required: [true, 'password is required']
    }
},{
    collection: 'users'
})

export default model('User', UserSchema)