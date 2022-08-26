import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function BlockedReasonModal(props: any) {

  return (
    <CustomModal name="Blocked reason">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Include" defaultValue="Post violation information"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
