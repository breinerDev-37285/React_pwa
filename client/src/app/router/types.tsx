import { Navigate, useLocation } from 'react-router-dom'

export const PublicRoute = ({
    isAuth,
    children,
}: {
    isAuth: boolean
    children: JSX.Element
}) => {
    let location = useLocation()

    return isAuth ? (
        <Navigate to="/app" state={{ from: location }} replace />
    ) : (
        children
    )
}

export const PrivateRoute = ({
    isAuth,
    children,
}: {
    isAuth: boolean
    children: JSX.Element
}) => {
    let location = useLocation()

    return isAuth ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}
