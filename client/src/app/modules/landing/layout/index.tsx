// import { Outlet } from 'react-router-dom'
import Navigation from '@modules/landing/components/navigation'
import {LandingRouting} from '../router/index'

export const LandingLayout = () => {
  return <>
        <Navigation/>
        <LandingRouting/>
  </>
}


export default LandingLayout
