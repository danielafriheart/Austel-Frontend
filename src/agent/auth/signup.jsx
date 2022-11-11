import React from 'react'
import { Checkbox, TextField } from '@mui/material'
import irrImg from '../../assets/auth-bg.svg'
import { useEffect } from 'react'
import { useState } from 'react';

// Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

// SignUp schema
import { signUpSchema } from '../../schemas/validation.schema';

function Signup() {
    const navigate = useNavigate();
    // Page title
    useEffect(() => {
        document.title = "Austel | Create account"
    })
    // End of page title

    // Formik form
    const onSubmit = () => {
        console.log('Submitted');
    }

    const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik(
        {
            initialValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                stateOfOrigin: '',
                address: ''
            },
            validationSchema: signUpSchema,//Validation Schema from yup
            onSubmit,
        })

    console.log(errors);
    // End of formik form

    const [step, setStep] = useState(1);

    // Form Submit
    // const handleSignUp = () => {
    //     navigate("/login")
    // }

    return (
        <div className='flex h-screen p-2 bg-house-pattern bg-tr-white justify-center bg-no-repeat bg-center bg-cover bg-blend-color-burn items-center'>
            <img draggable="false" className='fixed top-auto' width={615} src={irrImg} alt="bg" />
            <div className='z-10 px-10 pt-10 pb-20 m-auto w-[450px] h-[559.09px] bg-white text-center flex flex-col justify-center shadow-xl'>
                <h3 className='text-3xl font-bold text-austel-green'>Create Account</h3>
                <span className='text-austel-green text-sm block mb-3 font-semibold'>Get started on Austel</span>

                <form action="" onSubmit={handleSubmit}>
                    {
                        step === 1 &&
                        <div className="w-full" id='form1'>
                            <CustomTextField label="Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            <CustomTextField label="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            <CustomTextField label="Password" name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            <CustomTextField label="Confirm Password" name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />

                            <div className='flex text-xs text-gray-700 text-left mt-5 mb-8 items-center'>
                                <Checkbox style={{ padding: '0' }} size='small' />
                                <span className='text-[14px] text-gray-400 ml-1'>Check the box if you have read the term and conditions</span>
                            </div>

                            <button className='text-white bg-austel-green py-3 px-20 my-2 block mx-auto text-sm' type='submit' onClick={() => setStep(2)}>{step === 1 && "Continue"}</button>

                            <span className="text-sm mt-2 text-gray-400">Already have an account? <Link to="/Login" className='text-austel-green'>Login</Link> </span>
                        </div>
                    }

                    {
                        step === 2 &&
                        <div className="w-full " id='form2'>
                            <CustomTextField label="State of origin" name="stateOfOrigin" value={values.stateOfOrigin} onChange={handleChange} />
                            <CustomTextField label="Address" name="address" value={values.address} onChange={handleChange} />

                            <div className="section text-start">
                                <p>Upload KYT Document</p>
                                <p className='text-[10px] text-gray-400 mt-2'>
                                    You are required to upload a copy of any of the following -  National ID Card,
                                    School ID Card, Voters Card, International Passport, Driver’s License or Admission Letter
                                </p>
                            </div>

                            <div className='flex flex-col text-xs text-gray-700 mt-5 mb-8 items-center px-0'>
                                {/* <input type="file" id='kycFile' name='filename' /> */}
                                <label class="custom-file-upload w-full px-0">
                                    <input type="file" id="myFile" name="filename" onChange={handleChange} />
                                    <p className='text-[14px] font-medium text-austel-green items-center flex'><CloudUploadIcon className='mr-2' /> Click Here to Upload</p>
                                </label>
                                <p id="myFile" name="filename" className='w-full text-end text-gray-400' >  {values?.kyc?.name}</p>
                            </div>

                            <button className='text-white bg-austel-green py-3 px-20 my-2 block mx-auto text-sm' type='submit'>{step === 2 && "Create Account"}</button>

                            <span className="text-sm mt-2 text-gray-400">Already have an account? <a className='text-austel-green' href="/login">Login</a></span>
                        </div>
                    }
                </form>
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
            variant='standard'
            required
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

export default Signup