import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function BlockedIPModal(props: any) {

  return (
    <CustomModal name="Blocked IP">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Match" defaultValue="194.5.48.231"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
