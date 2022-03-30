import { activeUser, startDelete, startGetUsers } from '@redux/actions/users'
import { IRedux } from '@redux/interfaces/redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UsersList = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((i: IRedux) => i.users)

    useEffect(() => {
        dispatch(startGetUsers())
    }, [dispatch, startGetUsers])

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <label
                                        htmlFor="my-modal-4"
                                        onClick={() =>
                                            dispatch(activeUser(user))
                                        }
                                    >
                                        <i className="fa-solid fa-file-pen modal-button btn btn-ghost"></i>
                                    </label>
                                    <i
                                        className="fa-solid fa-trash  btn btn-ghost"
                                        onClick={() =>
                                            dispatch(
                                                startDelete({
                                                    ...user,
                                                    password: '',
                                                })
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
