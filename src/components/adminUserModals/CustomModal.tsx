import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { MenuItem } from "../../commonStyle/CommonStyle";
import { BlueButton } from "../../commonStyle/CommonStyle";


export default function CustomModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const { name, children } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleClickOpen}>
        {name}
      </MenuItem>
      <Dialog
        style={{ width: '20%', marginLeft: '40%', minWidth: '300px' }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ color: "white", backgroundColor: "#336def" }}>
          {name}
        </DialogTitle>
        {children}
        <DialogActions>
          <BlueButton onClick={handleClose} autoFocus>
            Apply
          </BlueButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
