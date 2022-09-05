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
  TextField,
  Button
} from "@mui/material";
import { DecideButton } from "../../../commonStyle/CommonStyle";

const MuiChip = styled(Chip)(({ theme }) => ({
  "&:hover": {
    background: "#ccccff",
  },
  color: "blue",
}));
const CreateRoleButton = styled(Button)({
  borderRadius: 20,
  marginLeft: 20,
  marginTop: 40,
  textTransform: "none",
});

export default function DeleteJobModal(props: any) {
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
        <MuiChip label="Delete job" />
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
          Delete job
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText  >
            Sure you want to delete this job?
          </DialogContentText>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField fullWidth label="Unblock Reason" defaultValue="Operation error" ></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CreateRoleButton onClick={handleClose} autoFocus>
            Cancel
          </CreateRoleButton>
          <DecideButton onClick={unblockClick} autoFocus>
            Delete
          </DecideButton>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
