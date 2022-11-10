import React from 'react'
// Icon


function card({ className, title, icon }) {
    return (
        <div className={`${className} text-white text-center h-[14em] rounded-xl justify-center items-center flex relative shadow-xl`}>
            <div className='absolute flex top-[-30px] bg-white rounded-full w-[78px] h-[78px] text-center items-center justify-center shadow-xl'>
                {icon}
            </div>
            <p className='text-[1.1em] font-medium'>{title}</p>
        </div>
    )
}

export default card