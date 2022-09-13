import * as React from "react";
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";


export default function EditUserModal(props: any) {
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
        <MuiChip label="Edit user" />
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
          Review result
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText >
            Post AD, user account paused
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
