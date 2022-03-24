import { IRegister, IRegisterAction } from "../interface/register"
import { Dispatch } from 'react'
import { fetch } from "@helpers/fetch"
import { REGISTER } from "../reducers/types"

const API_SERVER = import.meta.env.VITE_API

export const register = (val:IRegister):IRegisterAction => ({
    type: REGISTER,
    payload: val
})

export const startRegister = async (val:IRegister, dispath:Dispatch<IRegisterAction> ) => {
    const { data,status } = await fetch({
        url: `${API_SERVER}/users`,
        method: 'POST',
        data: val
    })

    if( status === 200 && data.ok ){
        return dispath(register(val))
    }
}