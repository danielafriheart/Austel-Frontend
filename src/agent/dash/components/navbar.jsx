import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


function navbar() {
    return (
        <div className=" items-center flex justify-end">
            <NotificationsNoneIcon />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='rounded-full h-[3em] w-[3em] mx-[7.14px]' alt="" />
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Age"
                sx={{
                    height: 40,
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    }
                }}
            >
                <MenuItem component={Link} to='/dashboard/settings'> My Profile</MenuItem>
                <MenuItem component={Link} to='/dashboard/settings'> Messages</MenuItem>
                <MenuItem component={Link} to='/dashboard/settings'> My Profile</MenuItem>
                <MenuItem component={Link} to='/dashboard/settings'> Logout</MenuItem>
            </Select>
        </div >
    )
}

export default navbar