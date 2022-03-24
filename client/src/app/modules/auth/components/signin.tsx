import { useNavigate } from 'react-router-dom'

export const SignInComponent = () => {

   
    const navigate = useNavigate()

    const handleAuth = () => {

        navigate('/protected', { replace: true });
    }

    return <>
        <h2>Sign In</h2>

        <button type="button" onClick={ handleAuth }>Login</button>
    </>
}
