import React from 'react'
import TransitionalModal from "../components/transitional";
// Image
import propertyImg from "./../../../assets/property.jpg";

function Properties() {
    return (
        <>
            <div className="md:px-10 sm:px-3 flex justify-between items-center py-3 border-b-2 bg-white">
                <h1 className="font-bold">  Properties</h1>
                <TransitionalModal />
            </div>
            <div className='py-5 md:px-10 sm:px-3 h-screen grid grid-rows-4 gap-4 mt-5'>
                <div className="flex rounded-lg border-2">
                    <img src={propertyImg} alt="" className='w-[10em]' />
                    <div className='flex flex-col w-full bg-white'>
                        <div className="p-10 h-[70%] justify-between flex">
                            <div>
                                <h1 className='font-bold'>Ayinke Villa</h1>
                                <p className='mb-9 font-light text-sm text-gray-400'>13, Adenike area, Ogbomosho</p>
                            </div>
                            <div>
                                <span className='font-light text-sm text-gray-400 flex gap-2 items-center'>Units: <h1 className='text-black font-medium'>12</h1></span>
                            </div>
                        </div>
                        <button className='h-[30%] border-t-2 text-sm  text-gray-400 font-light'>Edit Property Listing</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Properties  