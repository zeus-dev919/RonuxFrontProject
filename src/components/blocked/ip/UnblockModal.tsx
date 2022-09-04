import * as React from "react";
import styled from "@emotion/styled";
import {
  Chip,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  TextField
} from "@mui/material";
import { DecideButton } from "../../../commonStyle/CommonStyle";

const MuiChip = styled(Chip)(({ theme }) => ({
  "&:hover": {
    background: "#ccccff",
  },
  color: "blue",
}));


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
        <MuiChip label="Unblock" />
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
          Delete user {props.name}
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText >
            Sure you want to unblock the IP {props.ip}?
          </DialogContentText>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField fullWidth label="Unblock Reason" defaultValue="Operation error"></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Unblock
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
