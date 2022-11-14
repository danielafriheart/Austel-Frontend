import React from 'react'
import TransitionalModal from "../components/transitional";
// Image
import propertyImg from "./../../../assets/property.jpg";

function Properties() {
    return (
        <>
            <div className="md:px-10 sm:px-3 flex justify-between items-center">
                <h1 className="font-bold text-xl">  Properties</h1>
                <TransitionalModal />
            </div>
            <div className='py-5 md:px-10 sm:px-3 '>
                <div className="w-full flex shadow-md bg-gray-50 rounded-lg">
                    <img src={propertyImg} alt="" className='w-[9em]' />
                    <div className="flex w-full">
                        <h1 className='font-bold'>Property Type</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Properties  