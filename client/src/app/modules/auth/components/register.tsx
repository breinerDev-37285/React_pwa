import { Formik, Form, Field, ErrorMessage } from 'formik'
import { IAuth } from '@modules/landing/interface/auth'
import {
    validations,
    validationsUpdate,
} from '@modules/landing/validation/auth'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister } from '@redux/actions/auth'
import { IRedux } from '@redux/interfaces/redux'
import { useEffect, useState } from 'react'
import { startUpdate } from '@redux/actions/users'

export const Register = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-96 bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <RegisterForm />
            </div>
        </div>
    )
}

export const RegisterForm = () => {
    const { active } = useSelector((I: IRedux) => I.users)

    let init: IAuth = {
        username: '',
        password: '',
        email: '',
    }

    const [initState, setInitState] = useState(init)

    const dispatch = useDispatch()

    useEffect(() => {
        if (active) {
            setInitState({
                ...active,
                password: '',
            })
        }
    }, [active])

    return (
        <Formik
            initialValues={initState}
            onSubmit={(val) => {
                if (active) {
                    dispatch(startUpdate(val))
                } else {
                    dispatch(startRegister(val))
                }
            }}
            validationSchema={active ? validationsUpdate : validations}
            enableReinitialize
            validateOnMount
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

                {!active && (
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
                )}

                <div className="form-control mb-6">
                    <label className="label text-gray font-bold">Email</label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="abc@example.com"
                        className="input input-bordered input-md "
                    />
                    <br />
                    <ErrorMessage
                        name="email"
                        component="span"
                        className="text-sm italic"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    {active ? <span>Update</span> : <span>Register</span>}
                </button>
            </Form>
        </Formik>
    )
}

export default Register
