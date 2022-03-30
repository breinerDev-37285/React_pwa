import { startLogout } from '@redux/actions/auth'
import { useDispatch } from 'react-redux'

export const Logout = () => {
    const dispatch = useDispatch()

    return (
        <>
            <button type="button" onClick={() => dispatch(startLogout())}>
                Logout
            </button>
        </>
    )
}
