import { IRedux } from '@redux/interfaces/redux'
import { DELETEUSER } from './../types'
import { fetching } from '@helpers/fetch'
import { IAuth } from '@modules/landing/interface/auth'
import { IUserAction, IUsers } from '@redux/interfaces/users'
import { GETUSERS, ACTIVEUSER, UPDATEUSER } from '@redux/types'
import { trackPromise } from 'react-promise-tracker'
import { logout } from './auth'

const URL = import.meta.env.VITE_API

export const update = (user: IUsers): IUserAction => ({
    type: UPDATEUSER,
    payload: {
        aux: user,
    },
})

export const getUsers = (users: IUsers[]): IUserAction => ({
    type: GETUSERS,
    payload: {
        users,
    },
})

export const activeUser = (active: IUsers): IUserAction => ({
    type: ACTIVEUSER,
    payload: {
        active,
    },
})

export const deleteUser = (user: IUsers): IUserAction => ({
    type: DELETEUSER,
    payload: {
        aux: user,
    },
})

export const startGetUsers = () => async (dispatch: (val?: any) => void) => {
    const token = localStorage.getItem('token')

    if (!token) return dispatch(logout())

    const { status, data } = await trackPromise(
        fetching({
            url: `${URL}/users`,
            method: 'get',
            headers: {
                'x-token': token,
            },
        }).catch((err) => console.error(err.response)),
        'getUsers'
    )

    if (status === 200 && data.ok) {
        dispatch(getUsers(data.users))
    }
}

export const startUpdate =
    ({ _id, ...rest }: IAuth) =>
    async (dispatch: (val?: any) => void) => {
        const token = localStorage.getItem('token')
        if (!_id || !token) return

        const user = {
            _id,
            ...rest,
        }
        const { status, data } = await trackPromise(
            fetching({
                url: `${URL}/users/${_id}`,
                method: 'put',
                data: { ...rest },
                headers: {
                    'x-token': token,
                },
            }).catch((err) => {
                console.error('error during fetching', err.response.data)
            })
        )

        if (status === 200 && data.ok) {
            dispatch(update(user))
        }
    }

export const startDelete =
    ({ _id, ...rest }: IAuth) =>
    async (dispatch: (val?: any) => void, redux: () => IRedux) => {
        const token = localStorage.getItem('token')

        const { uid } = redux().auth
        if (!_id || !token || uid === _id) return

        const info = {
            _id,
            ...rest,
        }

        const { status, data } = await trackPromise(
            fetching({
                url: `${URL}/users/${_id}`,
                method: 'delete',
                headers: {
                    'x-token': token,
                },
            }).catch((err) => console.error(err.response))
        )

        if (status === 200 && data.ok) {
            dispatch(deleteUser(info))
        }
    }
