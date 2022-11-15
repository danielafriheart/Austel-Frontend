import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import UnitAccordion from '../components/unitAccordion';

const steps = ['Property Details', 'Unit Setup', 'Create an ad'];

export default function HorizontalLinearStepper() {

    // Formik form
    const { values, handleChange } = useFormik(
        {
            initialValues: {
                propertyName: '',
                propertyType: '',
                propertyState: '',
                streetAddress: '',
                // numberOfUnits: '',
                country: '',
                city: '',
                zipCode: '',
            },
        }
    )
    console.log(values);
    // End of formik

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // States in nigeria
    const states = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara']

    const statesItemList = states.map(stateItem => {
        return (
            <MenuItem value={stateItem}>{stateItem}</MenuItem>
        )
    })
    // End of states in  Nigeria

    // Property type
    const propertyType = ['Hostel', 'Bungalow', 'Duplex', 'Flat Apartment', 'Shops', 'Hall']
    const propertyTypeList = propertyType.map(propertyItem => {
        return (
            <MenuItem value={propertyItem}>{propertyItem}</MenuItem>

        )
    })
    // End of property type  

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography variant="caption">Optional</Typography>
                    //     );
                    // }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div sx={{ mt: 2, mb: 1 }}>
                        {
                            activeStep === 0 &&
                            <div>
                                <div className="my-10">
                                    <h1 className='text-3xl font-bold text-black'> Property Details</h1>
                                    <p className="text-[0.8em] mt-2">Enter your address information, then navigate to the property details section.</p>
                                </div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className="w-100 gap-3 grid grid-cols-[58%,40%]">
                                        <TextField id="standard-basic" label="Property Name" variant="outlined" name='propertyName' value={values.propertyName} onChange={handleChange} />

                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth >
                                                <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    name='propertyType'
                                                    value={values.propertyType}
                                                    onChange={handleChange}
                                                    MenuProps={{
                                                        style: {
                                                            maxHeight: 300,
                                                        },
                                                    }}
                                                >
                                                    {propertyTypeList}
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>


                                    <div className="w-100 gap-3 grid grid-cols-[38%,60%] mt-5">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth >
                                                <InputLabel id="demo-simple-select-label">State</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={values.propertyState}
                                                    name='propertyState'
                                                    onChange={handleChange}
                                                    MenuProps={{
                                                        style: {
                                                            maxHeight: 300,
                                                        },
                                                    }}
                                                >
                                                    {statesItemList}
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField id="standard-basic" label="Street Address" type='text' variant="outlined" name='streetAddress' value={values.streetAddress} onChange={handleChange} />
                                    </div>

                                    <div className="w-100 gap-3 gap-y-3 grid grid-cols-3 mt-5">
                                        <TextField id="standard-basic" label="Country" variant="outlined" name='country' value={values.country} onChange={handleChange} />

                                        <TextField id="standard-basic" label="City" variant="outlined" onChange={handleChange} value={values.city} name='city' />
                                        <TextField id="standard-basic" label="Zip" variant="outlined" type='number' value={values.zipCode} name='zipCode' onChange={handleChange} />

                                    </div>

                                    {/* Comment */}
                                    <TextField id="standard-basic" label="Comment" variant="standard" sx={{ marginTop: '4em', marginBottom: '1em' }} />
                                </Box>
                            </div>
                        }
                        {
                            activeStep === 1 &&
                            <div>
                                <div className="my-10">
                                    <h1 className='text-3xl font-bold text-black'>Unit Setup</h1>
                                    <p className="text-[0.8em] mt-2">Enter the number of each of the following rooms in your unit and select  any additional rooms in the unit</p>
                                </div>
                                <UnitAccordion />
                            </div>
                        }

                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )
            }
        </Box >
    );
}
