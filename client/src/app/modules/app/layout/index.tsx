import { IRedux } from '@redux/interfaces/redux'
import { useSelector } from 'react-redux'
import { Logout } from '../components/logout'
import { UsersPage } from '../pages/users'

export const ProtectedAppLayout = () => {
    const { username } = useSelector((i: IRedux) => i.auth)

    return (
        <div className="w-full px-5 pt-5">
            <div className="w-full flex justify-between">
                <h1>
                    Hello there! <strong>{username.toUpperCase()}</strong>
                </h1>
                <Logout />
            </div>
            <span>
                This is an app to practice with (progressive web application)
                PWA
            </span>

            <UsersPage />
        </div>
    )
}

export default ProtectedAppLayout
