import { IUserAction, IUserState } from '@redux/interfaces/users'
import { GETUSERS, ACTIVEUSER, UPDATEUSER, DELETEUSER } from '@redux/types'

const init: IUserState = {}

export const UsersReducer = (
    state = init,
    { type, payload }: IUserAction
): IUserState => {
    switch (type) {
        case GETUSERS:
            state = { ...state, users: payload?.users }
            break
        case ACTIVEUSER:
            state = { ...state, active: payload?.active }
            break
        case UPDATEUSER:
            state = {
                ...state,
                active: undefined,
                users: state.users?.map((item) =>
                    item._id === payload?.aux._id ? payload.aux : item
                ),
            }
            break
        case DELETEUSER:
            state = {
                ...state,
                users: state.users?.filter(
                    (item) => item._id !== payload?.aux._id
                ),
            }
            break
    }

    return state
}
