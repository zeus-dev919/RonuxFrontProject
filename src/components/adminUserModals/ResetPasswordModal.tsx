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
  Box,
  Button
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

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
          <DialogTitle className='dialog-title'>
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
            <Button className='normal-text round-button' autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button className='normal-text round-button' onClick={resetClick} autoFocus>
              Reset
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle
            className='dialog-title'
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
            <Button className='normal-text round-button' autoFocus onClick={handleClose}>
              Copy password
            </Button>
            <Button className='normal-text round-button' onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
