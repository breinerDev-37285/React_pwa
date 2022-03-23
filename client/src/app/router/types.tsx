import { AuthContext } from '@helpers/context'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

interface IRouteAuth {
    isAuth: boolean
    [x: string]: any
}

export const PrivateRoute = () => {
    const { isAuth } = useContext(AuthContext)
    return isAuth ? <Outlet/> : <Navigate to='/login'/>
}