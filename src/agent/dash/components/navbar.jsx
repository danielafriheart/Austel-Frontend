import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function navbar() {
    return (
        <div className=" items-center flex justify-end">
            <NotificationsNoneIcon />
            <AccountCircleOutlinedIcon className='ml-3'/>
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