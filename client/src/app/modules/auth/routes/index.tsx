import { Route, Routes } from 'react-router-dom'
import Register from '../components/register'
import { SignInComponent } from '../components/signin'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route index element={<SignInComponent />} />
            <Route path="register" element={<Register />} />
        </Routes>
    )
}
