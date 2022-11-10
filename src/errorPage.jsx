import React from 'react'
import { useNavigate } from 'react-router'
// Error image
import Err from './assets/404Img.png'

// icon
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className='min-w-full min-h-screen flex flex-col items-center justify-center relative'>
            <div className='flex w-full px-10 py-5 absolute top-0'>
                <button onClick={() => navigate(-1)} className='text-gray-500'><ReplyAllIcon  color='primary' fontSize='large'/> Return</button>
            </div>
            <h1 className='font-bold text-2xl mb-2'>Page under construction...</h1>
            <p className='text-light text-gray-500'>You'd be the first to get notified once this page is available!!!</p>
            <img src={Err} alt="" />
        </div>
    )
}

export default ErrorPage