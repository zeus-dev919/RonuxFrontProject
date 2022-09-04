import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { DecideButton } from "../../../commonStyle/CommonStyle";

export default function AddBlockedIPModal(props: any) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.addIP)
  }, [props.addIP]);

  const handleClose = () => {
    setOpen(false);
  };
  const addClick = () => {
    props.addIPClick();
    //API fetch or axios here
  }

  return (
    <Dialog
      open={open}
      onClose={props.addIPClick}
      maxWidth='xs'
      style={{ width: '100%' }}
    >
      <DialogTitle
        className='dialog-title'
      >
        Add blocked IP
      </DialogTitle>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Blocked IP" defaultValue="194.5.48.231"></TextField>
        </DialogContentText>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Blocked reason" defaultValue="Post violation information"></TextField>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DecideButton onClick={props.addIPClick} >
          Cancel
        </DecideButton>
        <DecideButton onClick={addClick} >
          Add
        </DecideButton>
      </DialogActions>
    </Dialog>
  );
}
