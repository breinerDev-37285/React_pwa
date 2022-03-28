import { startLogout } from '@redux/actions/auth'
import { useDispatch } from 'react-redux'

export const Logout = () => {
    const dispatch = useDispatch()

    return (
        <>
            <h2>Protected Page</h2>

            <button type="button" onClick={() => dispatch(startLogout())}>
                Logout
            </button>
        </>
    )
}
