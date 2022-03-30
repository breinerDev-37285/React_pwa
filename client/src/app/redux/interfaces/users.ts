export interface IUserState {
    users?: IUsers[]
    active?: IUsers
    aux?: any
}

export interface IUserAction {
    type: string
    payload?: IUserState
}

export interface IUsers {
    username: string
    email: string
    _id: string
}
