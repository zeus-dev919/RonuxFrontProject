import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function UserNameModal(props: any) {

  return (
    <CustomModal name="Username" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Match" defaultValue="usertcqq"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
