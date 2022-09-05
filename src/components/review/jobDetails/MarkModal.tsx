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
} from "@mui/material";
import { DecideButton } from "../../../commonStyle/CommonStyle";

const MuiChip = styled(Chip)(({ theme }) => ({
  "&:hover": {
    background: "#ccccff",
  },
  color: "blue",
}));


export default function MarkModal(props: any) {
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
        <MuiChip label="Mark as reviewed" />
      </Box>
      <Dialog
        maxWidth='xs'
        style={{ width: '100%' }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          className='dialog-title'
        >
          Mark as reviewed
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText >
            Sure you want to make this job as reviewed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Confirm
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
