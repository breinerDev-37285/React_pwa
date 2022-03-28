import { IAuthState, IAuthAction } from '@redux/interfaces/auth'
import { REGISTER, CHECKING, SIGNIN } from '@redux/types'

const init: IAuthState = {
    uid: '',
    username: '',
    checking: true,
}

export const AuthReducer = (
    state = init,
    { type, payload }: IAuthAction
): IAuthState => {
    switch (type) {
        case REGISTER:
            state = { ...state, ...payload }
            break
        case CHECKING:
            state = { ...state, checking: false }
            break
        case SIGNIN:
            state = { ...state, ...payload }
            break
    }

    return state
}
