import { IAuthState } from './auth'
import { IUserState } from './users'

export interface IRedux {
    auth: IAuthState
    users: IUserState
}
