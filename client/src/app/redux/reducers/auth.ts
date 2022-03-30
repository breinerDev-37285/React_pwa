import { IAuthState, IAuthAction } from '@redux/interfaces/auth'
import { REGISTER, SIGNIN } from '@redux/types'

const init: IAuthState = {
    uid: '',
    username: '',
}

export const AuthReducer = (
    state = init,
    { type, payload }: IAuthAction
): IAuthState => {
    switch (type) {
        case REGISTER:
            state = { ...state, ...payload }
            break
        case SIGNIN:
            state = { ...state, ...payload }
            break
    }

    return state
}
