export interface IRegisterState {
    uid: string
    username: string 
    checking: boolean
    token: string
}

export interface IRegiserAction {
    type: string 
    payload?: IRegisterState
}