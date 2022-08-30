import * as React from "react";

import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";

import { MuiChip, DecideButton } from "../../../commonStyle/CommonStyle";


export default function ApproveModal(props: any) {
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
          style={{ color: "white", backgroundColor: "#336def" }}
        >
          Approve ID Verification
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            Sure you want to approve identity verification of freelancer Perry Lance?
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
