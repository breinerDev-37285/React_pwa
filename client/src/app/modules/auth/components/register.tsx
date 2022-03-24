import { Formik,Form,Field,ErrorMessage } from 'formik'
import { IRegister } from '@modules/auth/interface/register'
import * as Yup from 'yup'

export const Register = () => {

    const init:IRegister = {
        username: '',
        password: ''
    }

    const validations = Yup.object({
        username: Yup.string()
                    .min(2, 'username require at least 2 characters')
                    .max(7, 'username required maximum 7 characters')
                    .required('username is required'),

        password: Yup.string()
                    .min(8, 'password require at least 8 characters')
                    .max(12,'password required maximum 12 characters')
                    .required('password is required')
    })


    return <div>
        <br />
        <Formik 
            initialValues={init}
            onSubmit={ val => console.log(val) }
            validationSchema={ validations }
        >
            <Form>
                <div>
                    <Field 
                        name='username'
                        placeholder='username'
                    />
                    <ErrorMessage name='username' component='span'/>
                </div>

                <br />

                <div>
                    <Field 
                        name='password'
                        placeholder='password'
                    />
                    <ErrorMessage name='password'  component='span'/>
                </div>

                <br />

                <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>
}

export default Register
