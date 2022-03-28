export interface IAuthState {
    checking?: boolean
    username: string
    uid: string
}

export interface IAuthAction {
    type: string
    payload?: IAuthState
}

export interface IAuthReponse {
    ok: boolean
    status: number
    uid?: string
    msg?: string
    token?: string
    error?: any
    username?: string
}

export interface IAuthLoginResponse {
    uid: string
    username: string
    token?: string
}
