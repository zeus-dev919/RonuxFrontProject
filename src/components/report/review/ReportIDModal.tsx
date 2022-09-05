import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function ReportIDModal(props: any) {

  return (
    <CustomModal name="ReportID" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Match" defaultValue="0123456789"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
