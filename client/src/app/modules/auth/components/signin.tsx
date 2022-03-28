import { IAuth } from '@modules/landing/interface/auth'
import { validations } from '@modules/landing/validation/auth'
import { startLogin } from '@redux/actions/auth'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'

export const SignInComponent = () => {
    const init: IAuth = {
        username: '',
        password: '',
    }

    const dispatch = useDispatch()

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-96 bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Formik
                    initialValues={init}
                    onSubmit={(val) => {
                        dispatch(startLogin(val))
                    }}
                    validationSchema={validations}
                >
                    <Form>
                        <div className="form-control mb-4">
                            <label className="label text-gray font-bold">
                                Username
                            </label>
                            <Field
                                type="text"
                                name="username"
                                placeholder="username"
                                className="input input-bordered input-md "
                            />
                            <br />
                            <ErrorMessage
                                name="username"
                                component="span"
                                className="text-sm italic"
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label text-gray font-bold">
                                Password
                            </label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="*************"
                                className="input input-bordered input-md "
                            />
                            <br />
                            <ErrorMessage
                                name="password"
                                component="span"
                                className="text-sm italic"
                            />
                        </div>

                        <button type="submit" className="btn  w-full">
                            SIGN IN
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
