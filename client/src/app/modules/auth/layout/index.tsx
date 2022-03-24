import Navigation from "@modules/auth/components/navigation"
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {

  return  <>
    <Navigation />
    <Outlet />
  </> 
}

export default AuthLayout
