import { Checkbox, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import irrImg from '../../assets/auth-bg.svg'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Formik, useFormik } from 'formik'

export default function Login() {
  // Beginning of formik form
  const { values, handleBlur, handleChange, errors } = useFormik({

    initialValues: {
      email: '',
      password: ''
    }

  });
  console.log(values);
  // End of formik form

  const navigate = useNavigate();
  // Page title
  useEffect(() => {
    document.title = "Austel | Login"
  })

  return (
    <div className='flex h-screen p-2 bg-house-pattern bg-tr-white justify-center bg-no-repeat bg-center bg-cover bg-blend-color-burn items-center'>
      <img draggable="false" className='fixed top-auto' width={615} src={irrImg} alt="bg" />
      <div className='z-10 px-10 pt-10 pb-20 m-auto w-[450px] shadow-xl bg-white text-center'>

        <h3 className='text-3xl font-bold text-austel-green'>Login</h3>

        <span className='text-austel-green text-sm block mb-3 font-semibold'>Get started on Austel</span>
        <form action="">

          <CustomTextField label="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

          <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password" size='small'>Password</InputLabel>
            <Input
              type="password"
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>

          <div className='flex text-xs text-gray-700 text-left mt-5 mb-8 items-center'>
            <Checkbox style={{ padding: '0' }} size='small' />
            <span className='text-[14px] text-gray-400 ml-1'>Remember me</span>
          </div>

          <button className='text-white bg-austel-green py-3 px-20 my-2 block mx-auto text-sm' type='submit'>Login</button>

        </form>
        <span className="text-sm mt-2 text-gray-400">Don't have an account? <Link to="/Signup" className="text-austel-green">Register</Link></span>

      </div>
    </div>
  )
}

const CustomTextField = (props) => {
  const styles = {
    label: {
      fontSize: 13
    },
    inputP: {
      fontSize: 13,
      marginBottom: 30
    }
  }
  return <>
    <TextField
      required
      variant='standard'
      end
      size='small'
      fullWidth
      InputLabelProps={{ style: styles.label }}
      InputProps={{
        style: styles.inputP
      }}
      {...props}
    />
  </>
}
