import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box
} from "@mui/material";
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";

export default function DeleteSkillModal(props: any) {
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
        <MuiChip label="Delete skill" />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          style={{ color: "white", backgroundColor: "#336def" }}
        >
          Delete skill {props.name}
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            Sure you want to delete this skill?
          </DialogContentText>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Delete Reason" defaultValue="Text description" sx={{ m: 1, width: '60ch' }}></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={handleClose} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={handleClose} autoFocus>
            Delete
          </DecideButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
