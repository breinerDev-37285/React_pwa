import * as Yup from 'yup'

export const validations = Yup.object({
    username: Yup.string()
        .min(2, 'username require at least 2 characters')
        .max(7, 'username required maximum 7 characters')
        .required('username is required'),

    password: Yup.string()
        .min(8, 'password require at least 8 characters')
        .max(12, 'password required maximum 12 characters')
        .required('password is required'),

    email: Yup.string().email().required('email is required'),
})

export const validationsUpdate = Yup.object({
    username: Yup.string()
        .min(2, 'username require at least 2 characters')
        .max(7, 'username required maximum 7 characters')
        .required('username is required'),

    email: Yup.string().email().required('email is required'),
})

export const validationsSignIn = Yup.object({
    username: Yup.string()
        .min(2, 'username require at least 2 characters')
        .max(7, 'username required maximum 7 characters')
        .required('username is required'),

    password: Yup.string()
        .min(8, 'password require at least 8 characters')
        .max(12, 'password required maximum 12 characters')
        .required('password is required'),
})
