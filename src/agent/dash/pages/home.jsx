import React from 'react'
import Chart from '../components/charts'
import Card from "../components/card";
// Image
import phone from '../../../assets/phone.png'
// Icons
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentsIcon from '@mui/icons-material/Payments';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import TransitionalModal from "../components/transitional";



export default function home() {
    return (
        <>
            <div className="px-10 flex justify-between items-center">
                <h1 className="font-bold text-xl">  Dashboard</h1>
                <TransitionalModal />
            </div>
            <div className='grid lg:grid-cols-[65%,35%] md:grid-cols-[repeat(1,100%)]'>
                <div className="py-5 px-[3em] border-r-2">

                    {/* Chart section */}
                    <div className='pb-10 w-full'>
                        <p className='font-medium mb-5'>Income/Expenditure Analytics</p>
                        <Chart />
                    </div>

                    <div className='pt-5'>
                        <p className='font-medium mb-9'>Your Property at a Glance</p>
                        <div className=' grid grid-cols-3 gap-10 text-center'>
                            <Card className='bg-austel-green-300' title='Tenancy' icon={<GroupsIcon className='text-austel-green-300' fontSize='large' />} />
                            <Card className='bg-[#23C4E8]' title='Finance' icon={<PaymentsIcon className='text-[#23C4E8]' fontSize='large' />} />
                            <Card className='bg-[#EB042D]' title='Complaints' icon={<ModeEditOutlineIcon className='text-[#EB042D]' fontSize='large' />} />
                        </div>
                    </div>
                </div>


                {/* Grid col 2 */}
                <div className="py-5 px-10">
                    <img src={phone} alt="" className='w-[336.48px] mx-auto my-[2em]' />
                    <div className='bg-austel-green-200 py-10 px-[2em] w-full mx-auto rounded-2xl'>
                        <h1 className='text-2xl font-medium'>Notifications</h1>
                        <div className=" mt-10">
                            <span className='flex items-center'><RadioButtonCheckedIcon className='text-austel-green' /> <p className='ml-2'>Daniel Logged into dashboard</p></span>
                            <span className='flex items-center my-3'><RadioButtonCheckedIcon className='text-austel-green' /> <p className='ml-2'>Daniel Logged into dashboard</p></span>
                            <span className='flex items-center'><RadioButtonCheckedIcon className='text-austel-green' /> <p className='ml-2'>Daniel Logged into dashboard</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// console.log(card[1]);