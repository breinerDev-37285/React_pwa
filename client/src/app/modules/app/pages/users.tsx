import { ModalUser } from '../components/addUser'
import { UsersList } from '../components/users'

export const UsersPage = () => {
    return (
        <div className="flex justify-between w-full  pt-5 ">
            <div className="card w-full bg-base-200 shadow-xl mr-2">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">USER LIST!</h2>

                        <label htmlFor="my-modal-4">
                            <i className="modal-button fas fa-plus btn btn-ghost" />
                        </label>
                    </div>
                    <p>This are all registered users in this app!</p>

                    <UsersList />
                </div>
            </div>

            <ModalUser />
        </div>
    )
}
