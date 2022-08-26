import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function UserNameModal() {

  return (
    <CustomModal name="Username">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Match" defaultValue="usertcqq"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
