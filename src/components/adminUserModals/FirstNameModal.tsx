import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";

export default function FirstNameModal(props: any) {

  return (
    <CustomModal name='First name' onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Include" defaultValue="Perry"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
