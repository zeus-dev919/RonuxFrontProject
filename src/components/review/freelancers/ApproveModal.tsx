import * as React from "react";
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import { DecideButton, MuiChip } from "../../../commonStyle/CommonStyle";


export default function UnblockModal(props: any) {
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
        maxWidth='xs'
        style={{ width: '100%' }}
      >
        <DialogTitle
          className='dialog-title'
        >
          Approve freelancer
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText >
            Sure you want to approve the application of freelancer {props.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Approve
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
