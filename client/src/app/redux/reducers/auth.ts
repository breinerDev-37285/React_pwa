import { IRegisterState,IRegiserAction } from '@redux/interfaces/auth';
import { REGISTER } from '@redux/types'

const init: IRegisterState = {
    uid: '',
    username: '',
    checking: true,
    token: ''
}

export const AuthReducer = (state = init, { type, payload }:IRegiserAction):IRegisterState => { 
    
    switch( type ){
        case REGISTER:
            state = {...state, ...payload}
            break
    }

    return state
}