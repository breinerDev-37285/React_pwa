import { IRegisterState, IRegisterAction } from '@modules/auth/interface/register';
import { REGISTER, LOGIN } from '@modules/auth/reducers/types'


export const RegisterReducer = (state:IRegisterState, { type, payload }:IRegisterAction):IRegisterState => {

    switch( type ) {
        case REGISTER:
            state={ ...state, ...payload }
            break 
        case LOGIN: 
            break
    }

    return state
}