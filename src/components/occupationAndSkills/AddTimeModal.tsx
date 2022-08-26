import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField,
  InputAdornment
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function AddTimeModal() {

  return (
    <CustomModal name="Add time">
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Start date" defaultValue="2020-01-01" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
          </TextField>
        </DialogContentText>
      </DialogContent>
      <DialogContent >
        <DialogContentText>
          <TextField label="End date" defaultValue="2020-03-14" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
