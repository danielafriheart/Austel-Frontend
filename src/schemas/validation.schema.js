import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email('Enter a valid email address').required('Required'),
    password: yup.string().min(5).required('Required'), //Minimum of 5 characters
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
    stateOfOrigin: yup.string().min(1).required('Required'),
    address: yup.string().required('Required')
})
