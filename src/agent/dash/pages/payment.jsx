import { Button } from '@mui/material'
import React from 'react'
import PayImg from "../../../assets/payment.jpg";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';


function Payment() {
    const [paymentStructures, setPaymentStructures] = useState([]);
    // Formik
    const { values, handleChange, } = useFormik({
        initialValues: {
            paymentTitle: '',
            paymentDescription: '',
            paymentAmount: ''
        }
    })
    // console.log(values);
    const handleSave = () => {
        setPaymentStructures(e => [...e, values]);
        handleClose()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Payment Types
    const paymentTitle = ['Rent', 'Maintenance', 'Light', 'Security']
    const selectPayment = paymentTitle.map(paymentType => {
        return (
            <MenuItem value={paymentType}>{paymentType}</MenuItem>
        )
    })

    return (
        <>
            <Dialog open={open} onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "60%",
                            // minWidth: "45%"  // Set your width here
                        },
                    },
                }}
            >
                <DialogTitle>Create Structure</DialogTitle>
                <DialogContent>
                    <div className="pt-5 gap-2 flex items-center">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Payment Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                onChange={handleChange}
                                name='paymentTitle'
                            >
                                {selectPayment}
                            </Select>
                        </FormControl>

                        <TextField fullWidth id="standard-basic" label="Payment Description" type='text' variant="outlined" name='paymentDescription' value={values.streetAddress} onChange={handleChange} />

                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.paymentAmount}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">#</InputAdornment>}
                                label="Amount"
                                type='number'
                                name='paymentAmount'
                            />
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog >
            <div className='lg:px-10 md:px-3 min-h-[100vh]'>
                <header className='flex items-center justify-between'>
                    <h1 className="font-bold text-xl">  Payment Structures</h1>
                    <button className='rounded-full px-4 py-2 text-austel-green border-2 border-austel-green font-bold' onClick={handleClickOpen}>
                        CREATE PAYMENT
                    </button>
                </header>

                <div>
                    {
                        paymentStructures.length > 0 &&
                        <table class="table table-auto w-full mt-10">
                            <thead>
                                <tr className='text-left bg-gray-200'>
                                    <th className='py-3 px-5'>S/N</th>
                                    <th>Payment Tile</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentStructures.map((payment, i) => {
                                        return (
                                            <tr className={`${i % 2 !== 0 && 'bg-gray-100'} border-b`}>
                                                <td className='py-3 px-5'>{i + 1}</td>
                                                <td>{payment.paymentTitle}</td>
                                                <td>{payment.paymentDescription}</td>
                                                <td>{payment.paymentAmount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
                {
                    paymentStructures < 1 &&
                    <div className="pb-5 flex items-center justify-center border-dashed border-green-500  border text-green-500 mt-5 flex-col hover:cursor-pointer" onClick={handleClickOpen}>
                        <img src={PayImg} alt="" className='lg:w-[15%] sm:w-[25%]' />
                        +  Create Payment Structure
                    </div>
                }
            </div>
        </>
    )
}

export default Payment