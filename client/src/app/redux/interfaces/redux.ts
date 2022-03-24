import { IThemeState } from './theme'
import { IRegisterState } from './auth'

export interface IRedux {
    theme: IThemeState
    auth: IRegisterState
}