import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import HorizontalLinearStepper from './linearStepper';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className='rounded-full px-4 py-2 text-white hover:bg-austel-green bg-[#2E8B57] shadow-xl' onClick={handleClickOpen}> <AddTwoToneIcon /> Add Property
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

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
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <HorizontalLinearStepper />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}



