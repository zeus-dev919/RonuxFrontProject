import * as React from "react";
import styled from "@emotion/styled";
import {
  Chip,
  Switch,
  Typography,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DecideButton } from "../../commonStyle/CommonStyle";

const MuiChip = styled(Chip)(({ theme }) => ({
  "&:hover": {
    background: "#ccccff",
  },
  color: "blue",
}));


export default function ResetPasswordModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [first, setFirst] = React.useState(true);

  //handle functions
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFirst(true);
  };
  const resetClick = () => {
    setFirst(false);
  };

  return (
    <div>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Reset Password" />
      </Box>
      {first ? (
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle style={{ color: "white", backgroundColor: "#336def" }}>
            Reset Password for {props.name}
          </DialogTitle>
          <DialogContent style={{ marginTop: "20px" }}>
            <DialogContentText>
              <Switch defaultChecked />
              Automatically generated password.
            </DialogContentText>
            <DialogContentText>
              <Switch defaultChecked />
              Require password change at next sign in
            </DialogContentText>
            <br />
          </DialogContent>
          <DialogActions>
            <DecideButton autoFocus onClick={handleClose}>
              Cancel
            </DecideButton>
            <DecideButton onClick={resetClick} autoFocus>
              Reset
            </DecideButton>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle
            style={{ color: "white", backgroundColor: "#336def" }}
          >
            Password reset successful
          </DialogTitle>
          <DialogContent style={{ marginTop: "20px" }}>
            <DialogContentText >
              <Typography variant="caption">
                Password
              </Typography>
              <Typography style={{ display: "flex", alignItems: "center" }}>
                BVWyL,8R
                <VisibilityIcon />
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <DecideButton autoFocus onClick={handleClose}>
              Copy password
            </DecideButton>
            <DecideButton onClick={handleClose} autoFocus>
              Close
            </DecideButton>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
