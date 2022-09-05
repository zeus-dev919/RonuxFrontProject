import * as React from "react";

import {
  DialogContent,
  DialogContentText,
  TextField,
  InputAdornment
} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function ReviewTimeModal(props: any) {
  return (
    <CustomModal name="Review time" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Start date" defaultValue="2020-01-01" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }} />
        </DialogContentText>
      </DialogContent>
      <DialogContent >
        <DialogContentText>
          <TextField fullWidth label="End date" defaultValue="2020-03-14" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }} />
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
