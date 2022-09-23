import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Box } from "@mui/material";
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";
import axios from 'axios';
import { useSnackbar } from "notistack";

export default function DeleteServiceModal(props: any) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [open, setOpen] = React.useState(false);
    const BASE_URL = process.env.REACT_APP_API;
    //hancle show or hidden modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteService = () => {
        axios.get(`${BASE_URL}/menu/delete/${props.row.id}`).then(() => {
            enqueueSnackbar('Successfully deleted', { variant: 'success' });
            handleClose();
            props.getServicelist();
        }).catch((error) => console.log(error));
    }
    return (
        <div>
            <Box onClick={handleClickOpen}>
                <MuiChip label="Delete service" />
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle
                    className='dialog-title'
                >
                    Delete service {props.row.name}
                </DialogTitle>
                <DialogContent style={{ marginTop: "20px" }}>
                    <DialogContentText style={{ marginTop: "20px" }} >
                        Sure you want to delete this service?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <DecideButton onClick={handleClose} autoFocus>
                        Cancel
                    </DecideButton>
                    <DecideButton onClick={deleteService} autoFocus>
                        Delete
                    </DecideButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
