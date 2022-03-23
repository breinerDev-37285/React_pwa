import { AuthContext } from "@helpers/context"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'

export const SignInComponent = () => {

    const { setAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAuth = () => {

        setAuthenticated(true)
        navigate('/protected', { replace: true });
    }

    return <>
        <h2>Sign In</h2>

        <button type="button" onClick={ handleAuth }>Login</button>
    </>
}
