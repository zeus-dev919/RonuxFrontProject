import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box
} from "@mui/material";
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";

export default function RestoreModal(props: any) {
  const [open, setOpen] = React.useState(false);

  //hancle show or hidden modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Restore modal" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          style={{ color: "white", backgroundColor: "#336def" }}
        >
          Restore skill {props.name}
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            Sure you want to restore this skill?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={handleClose} autoFocus>
            Restore
          </DecideButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
