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

import { MuiChip, DecideButton } from "../../../commonStyle/CommonStyle";


export default function CancelModal(props: any) {
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
        <MuiChip label="Approve" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          className='dialog-title'
        >
          Cancel approve ID Verification
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            Sure you want to cancel to approve identity verification of freelancer Perry Lance?
          </DialogContentText>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Reject approve reason" defaultValue="Text description"></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Cancel approve
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
