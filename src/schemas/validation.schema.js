import * as yup from "yup";

const passworddRegex = ''

const signUpSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Enter a valid email address').required(),
    password: yup.string().password('')
})