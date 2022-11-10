import { Button } from '@mui/material'
import React from 'react'
import PayImg from "../../../assets/payment.jpg";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';


function FormDialog() {
    // Formik
    const { values, handleChange, } = useFormik({
        initialValues: {

        }
    })

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <button className='rounded-full px-4 py-2 text-austel-green border-2 border-austel-green font-bold' onClick={handleClickOpen}>
                CREATE PAYMENT
            </button>
            <Dialog open={open} onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "40%",
                            // minWidth: "45%"  // Set your width here
                        },
                    },
                }}
            >
                <DialogTitle>Create Structure</DialogTitle>
                <DialogContent>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.state}
                                name='state'
                                label="State"
                                onChange={handleChange}
                                MenuProps={{
                                    style: {
                                        maxHeight: 300,
                                    },
                                }}
                            >
                                {/* {statesItemList} */}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField id="standard-basic" label="Street Address" type='text' variant="outlined" name='streetAddress' value={values.streetAddress} onChange={handleChange} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog >
        </div >
    );
}

function Payment() {
    return (
        <div className='px-10 min-h-[100vh]'>
            <header className='flex items-center justify-between'>
                <h1 className="font-bold text-xl">  Payment Structures</h1>
                <FormDialog />
            </header>
            <div className="pb-5 flex items-center justify-center border-dashed border-green-500  border text-green-500 mt-5 flex-col hover:cursor-pointer">
                <img src={PayImg} alt="" className='w-[15%]' />
                +  Create Payment Structure
            </div>
        </div>
    )
}

export default Payment