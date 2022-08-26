import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { DecideButton } from "../../commonStyle/CommonStyle";

export default function DeleteUserModal(props: any) {
    const [open, setOpen] = React.useState(false);

    //hancle show or hidden modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen}>{"Delete user"}
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle
                    style={{ color: "white", backgroundColor: "#336def" }}
                >
                    Delete user {props.name}
                </DialogTitle>
                <DialogContent style={{ marginTop: "20px" }}>
                    <DialogContentText style={{ marginTop: "20px" }} >
                        Sure you want to delete this user?
                    </DialogContentText>
                    <DialogContentText style={{ marginTop: "20px" }} >
                        <TextField label="Delete Reason" defaultValue="Text description" sx={{ m: 1, width: '60ch' }}></TextField>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <DecideButton onClick={handleClose} autoFocus>
                        Delete
                    </DecideButton>
                    <DecideButton onClick={handleClose} autoFocus>
                        Close
                    </DecideButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
