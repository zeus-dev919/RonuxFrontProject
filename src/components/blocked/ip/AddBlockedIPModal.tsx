import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { DecideButton } from "../../../commonStyle/CommonStyle";

export default function AddBlockedIPModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
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
      fullScreen={fullScreen}
      open={open}
      onClose={props.addIPClick}
      style={{ width: '30%', marginLeft: '35%', minWidth: '500px' }}
    >
      <DialogTitle
        style={{ color: "white", backgroundColor: "#336def" }}
      >
        Add blocked IP
      </DialogTitle>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Blocked IP" defaultValue="194.5.48.231" sx={{ m: 1, width: '40ch' }}></TextField>
        </DialogContentText>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Blocked reason" defaultValue="Post violation information" sx={{ m: 1, width: '40ch' }}></TextField>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DecideButton onClick={props.addIPClick} autoFocus>
          Cancel
        </DecideButton>
        <DecideButton onClick={addClick} autoFocus>
          Add
        </DecideButton>
      </DialogActions>
    </Dialog>
  );
}
