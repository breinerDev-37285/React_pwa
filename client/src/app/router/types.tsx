import { Outlet, Navigate } from 'react-router-dom'

interface IRouteAuth {
    isAuth: boolean
    [x: string]: any
}

export const PrivateRoute = () => {
    const isAuth = false
    return isAuth ? <Outlet/> : <Navigate to='/login'/>
}