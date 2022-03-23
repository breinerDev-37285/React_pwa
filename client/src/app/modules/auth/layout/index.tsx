import { AuthContext } from "@helpers/context"
import Navigation from "@modules/auth/components/navigation"
import { useContext } from "react"
import { Outlet,Navigate } from 'react-router-dom'

export const AuthLayout = () => {
  const { isAuth } = useContext(AuthContext)

  return !isAuth ? <>
    <Navigation />
    <Outlet />
  </> : <Navigate to='/protected' />
}

export default AuthLayout
