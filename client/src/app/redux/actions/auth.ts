import { fetching } from '@helpers/fetch'
import { IAuth } from '@modules/landing/interface/auth'
import { IAuthAction, IAuthLoginResponse } from '@redux/interfaces/auth'
import { SIGNIN, LOGOUT, REGISTER } from '@redux/types'
import { trackPromise } from 'react-promise-tracker'

const URL = import.meta.env.VITE_API

export const register = (payload: IAuthLoginResponse): IAuthAction => ({
    type: REGISTER,
    payload,
})

export const login = ({
    uid,
    username,
    token,
}: IAuthLoginResponse): IAuthAction => {
    token && localStorage.setItem('token', token)

    return {
        type: SIGNIN,
        payload: {
            uid,
            username,
        },
    }
}

export const logout = (): IAuthAction => ({
    type: LOGOUT,
})

export const startLogout = () => async (dispatch: (val?: any) => void) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return dispatch(logout())
    }

    const { data, status } = await trackPromise(
        fetching({
            url: `${URL}/session/delete`,
            method: 'delete',
            data: {},
            headers: {
                'x-token': token,
            },
        }).catch((err) => console.error(err.response.data))
    )

    if (status === 200 && data.ok) {
        localStorage.removeItem('token')

        dispatch(logout())
    }
}

export const startRegister =
    (auth: IAuth) => async (dispatch: (val?: any) => void) => {
        const { status, data } = await trackPromise(
            fetching({
                url: `${URL}/users`,
                method: 'post',
                data: { ...auth },
            }).catch((err) => {
                console.error('error during fetching', err.response.data)
            })
        )

        if (status === 200 && data.ok) {
            const { token, uid, username } = data

            if (!token) return

            dispatch(register({ uid, username, token }))
        }
    }

export const startCheckingAuth =
    () => async (dispatch: (val?: any) => void) => {
        const token = localStorage.getItem('token')

        if (!token) {
            return dispatch(logout())
        }

        const data = await trackPromise(
            fetching({
                url: `${URL}/refresh`,
                method: 'post',
                data: {},
                headers: {
                    'x-token': token,
                },
            }).catch((err) => {
                console.error('error during fetching', err.response.data)
            })
        )

        if (data.status === 200 && data.data.ok) {
            const { uid, username, token } = data.data

            dispatch(login({ uid, username, token }))
        }
    }

export const startLogin =
    (auth: IAuth) => async (dispatch: (val?: any) => void) => {
        const { status, data } = await trackPromise(
            fetching({
                url: `${URL}/login`,
                method: 'post',
                data: { ...auth },
            }).catch((err) => {
                console.error('error during fetching', err.response.data)
            })
        )

        if (status === 200 && data.ok) {
            const { token, uid, username } = data

            if (!token) return

            dispatch(login({ uid, username, token }))
        }
    }
