import { RegisterForm } from '@modules/auth/components/register'

export const ModalUser = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Add new User</h3>
                    <div className="py-4">
                        <RegisterForm />
                    </div>
                </label>
            </label>
        </div>
    )
}
