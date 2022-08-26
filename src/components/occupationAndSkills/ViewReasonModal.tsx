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

export default function ViewReasonModal(props: any) {
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
        <MuiChip label="View reason" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          style={{ color: "white", backgroundColor: "#336def" }}
        >
          Delete reason
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            Delete reason: Illegal skill
          </DialogContentText>
          <DialogContentText style={{ marginTop: "10px" }} >
            Delete reason: Illegal skill
          </DialogContentText>
          <DialogContentText style={{ marginTop: "10px" }} >
            Delete reason: Illegal skill
          </DialogContentText>
          <DialogContentText style={{ marginTop: "10px" }} >
            Delete reason: Illegal skill
          </DialogContentText>
          <DialogContentText style={{ marginTop: "10px" }} >
            Delete reason: Illegal skill
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Close
          </DecideButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
