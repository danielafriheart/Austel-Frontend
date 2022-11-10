import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Button from '@mui/material/Button';

// Icons
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';

import { useFormik } from 'formik';

export default function SimpleAccordion() {

    // Formik form
    const { values, handleChange } = useFormik({
        initialValues: {
            unitName: 'Unit 1',
            numberOfRooms: '',
        }
    })

    return (
        <div>
            <Accordion id='acc' style={{
                minWidth: '100%',
                marginBottom: 5,
                // backgroundColor: 'red'
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        backgroundColor: '#E7F6EE'
                    }}
                    className='shadow'
                >
                    <Typography><h5 className='font-bold'>{values.unitName}</h5></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='mt-5'
                    >
                        <div className="w-100 gap-3 grid grid-cols-[60%,38%]">
                            <TextField id="standard-basic" label="Unit Name" variant="outlined" name='unitName' value={values.unitName} onChange={handleChange} />
                            <TextField id="standard-basic" label="No. of rooms" type='number' variant="outlined" name='numberOfRooms' value={values.numberOfRooms} onChange={handleChange} />
                        </div>

                        <div className="w-100 flex mt-5">
                            <button className='rounded-full px-5  text-white bg-austel-green hover:bg-[#2E8B57] text-sm'> < AddTwoToneIcon /> Add Payment
                            </button>
                            <div className="ml-auto">

                                <IconButton aria-label="delete" size="large" >
                                    <BorderColorTwoToneIcon fontSize="inherit" className='text-blue-400' />
                                </IconButton>
                                <IconButton aria-label="delete" size="large">
                                    <DeleteIcon fontSize="inherit" className='text-red-700' />
                                </IconButton>
                                <IconButton aria-label="delete" size="large">
                                    <DescriptionTwoToneIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <div className="w-100 flex mt-5 justify-end">
                <Button variant='outlined' className='rounded-full px-6 py-3 text-white bg-austel-green hover:bg-[#2E8B57] ml-auto gap-10 flex'> Add Unit  <AccountBalanceTwoToneIcon />
                </Button>
            </div>
        </div>
    );
}