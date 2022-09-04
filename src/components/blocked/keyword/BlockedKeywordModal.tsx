import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function BlockedKeywordModal(props: any) {

  return (
    <CustomModal name="Blocked keyword" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Include" defaultValue="test"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
