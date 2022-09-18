import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Box } from "@mui/material";
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";
import axios from 'axios';
export default function DeleteUserModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const BASE_URL = process.env.REACT_APP_API;
    //hancle show or hidden modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteUser = () => {
        axios.get(`${BASE_URL}/users/delete/${props.row.id}`).then(result => {
            handleClose();
            props.getUserlist();
        }).catch((error) => console.log(error));
    }
    return (
        <div>
            <Box onClick={handleClickOpen}>
                <MuiChip label="Delete user" />
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle
                    className='dialog-title'
                >
                    Delete user {props.row.username}
                </DialogTitle>
                <DialogContent style={{ marginTop: "20px" }}>
                    <DialogContentText style={{ marginTop: "20px" }} >
                        Sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <DecideButton onClick={handleClose} autoFocus>
                        Cancel
                    </DecideButton>
                    <DecideButton onClick={deleteUser} autoFocus>
                        Delete
                    </DecideButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
