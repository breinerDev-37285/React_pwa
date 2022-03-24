export interface IRegister {
    username: string
    password: string
}

export interface IRegisterState extends IRegister { }

export interface IRegisterAction {
    type: string 
    payload?: IRegisterState
}