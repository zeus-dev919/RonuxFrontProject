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
          Unapproved reason
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <span>Unapproved reason</span>
            <span></span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={unblockClick} autoFocus>
            Close
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
