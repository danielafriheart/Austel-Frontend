import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, IconButton } from '@mui/material';
// Icon
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useState } from 'react';
import { PhotoCamera } from '@mui/icons-material';


export default function Modal() {
    // LocalStorage\
    var profile = JSON.parse(localStorage.getItem("userDetails"))

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [myName, setMyName] = useState(
        {
            name: profile.name,
        }
    )
    // console.log(myName);

    const handleClose = () => {
        setOpen(false);
    };

    // Update
    const handleUpdate = () => {
        var updatedName = myName.name
        console.log(myName.name);

        profile.name = updatedName;
        localStorage.setItem('userDetails', JSON.stringify(profile));
        window.location.reload()
    }

    const handleChange = (prop) => (e) => {
        setMyName({ ...myName, [prop]: e.target.value });
    }

    // Profile picture upload
    const [img, setImg] = useState();
    const handleImgUpload = (e) => {
        console.log(e.target.files);
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div>
            <button variant='transparent' className='bg-transparent outline-none text-[1.1em]' onClick={handleClickOpen}>
                <ModeEditOutlineIcon className='mr-2' /> Edit profile
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogContent>
                    <DialogContentText className='pb-0 w-[35vw]'>
                        <img src={img} className='rounded-full h-[9em] w-[9em] border-white border-8 shadow relative' alt="" />
                        <IconButton aria-label="upload picture" component="label" className='absolute -top-10 -right-[4em] shadow bg-blue-500'>
                            <input hidden accept="image/*" type="file" onChange={handleImgUpload} />
                            <PhotoCamera className='text-austel-green' />
                        </IconButton>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        name='name'
                        type="text"
                        fullWidth
                        variant="standard"
                        value={myName.name}
                        onChange={handleChange("name")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
