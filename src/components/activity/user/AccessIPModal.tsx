import * as React from "react";
import { TextField, DialogContent, DialogContentText } from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function AccessIPModal() {
  return (
    <div>
      <CustomModal name="Access IP">
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Match" defaultValue="84.17.34.152"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
