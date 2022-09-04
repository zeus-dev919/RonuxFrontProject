import * as React from "react";
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  TextField
} from "@mui/material";
import { DecideButton, MuiChip } from "../../../commonStyle/CommonStyle";


export default function RejectApproveModal(props: any) {
  const [open, setOpen] = React.useState(false);

  //handle functions
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const unblockClick = () => {
    handleClose();

  }

  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Reject approve" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='xs'
        style={{ width: '100%' }}
      >
        <DialogTitle
          className='dialog-title'
        >
          Reject approve freelancer
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText >
            Sure you want to reject the application of freelancer {props.name}?
          </DialogContentText>
          <TextField fullWidth style={{ marginTop: "20px" }} label="Reject approve reason" defaultValue="Text description" />
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Reject approve
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
