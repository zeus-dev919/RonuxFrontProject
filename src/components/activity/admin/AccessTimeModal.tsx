import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TextField } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InputAdornment from '@mui/material/InputAdornment';
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function AccessTimeModal() {
  return (
    <CustomModal name="Access time">
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
