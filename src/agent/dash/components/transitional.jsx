import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import VillaIcon from '@mui/icons-material/Villa';
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
            <button className='px-4 py-2  border hover:bg-gray-200 bg-gray-100 flex items-center gap-2' onClick={handleClickOpen}> <VillaIcon /> <p className='font-light text-sm'>Create Property</p>
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
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



