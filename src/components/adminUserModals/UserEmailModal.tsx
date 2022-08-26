import * as React from "react";
import { TextField, DialogContent, DialogContentText } from "@mui/material";
import CustomModal from "./CustomModal";

export default function UserEmailModal() {
  return (
    <div>
      <CustomModal name="User email">
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Match" defaultValue="usereds@gmail.com"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
