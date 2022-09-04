import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function BlockedIPModal(props: any) {

  return (
    <CustomModal name="Blocked IP" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Match" defaultValue="194.5.48.231"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
