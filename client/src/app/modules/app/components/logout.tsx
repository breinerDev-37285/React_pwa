import { AuthContext } from "@helpers/context"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

    const { setAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAuth = () => {

        setAuthenticated(false)
        navigate('/', { replace: true });
    }

    return <>
        <h2>Protected Page</h2>

        <button type="button" onClick={ handleAuth }>Logout</button>
    </>
}
