import { BrowserRouter as Router,useRoutes,Routes,Route } from 'react-router-dom'
import MainNavigation from '@utils/components/navigation'
import ProtectedAppLayout from '@modules/app/layout'
import { PrivateRoute } from './types'
import { About, Contacts, Home, Services } from '@modules/landing/pages'
import LandingLayout from '@modules/landing/layout'
import { ProtectedPage } from '@modules/app/pages'
import NotMatch from '@utils/components/notFound'
import AuthLayout from '@modules/auth/layout'
import SignIn from '@modules/auth/pages/signin'
import RegisterPage from '@modules/auth/pages/register'

export const MainRouting = () => {

    return <>
        <Router>
            <MainNavigation />
            <Routes>
                <Route path='/*' element={<LandingLayout />} />
                <Route path='/login' element={<AuthLayout />}>
                    <Route index element={ <SignIn /> }/>
                    <Route path='register' element={ <RegisterPage /> }/>
                </Route>
                <Route path='/protected' element={<PrivateRoute/>}>
                    <Route index element={<ProtectedAppLayout/>}/>
                </Route>
                <Route path='*' element={ <NotMatch/> }/>
            </Routes>
            
        </Router>
    </>
}


export default MainRouting
