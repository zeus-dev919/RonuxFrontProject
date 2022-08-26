import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import CustomModal from "./CustomModal";

export default function UserNameModal() {

  return (
    <div>
      <CustomModal name="Username">
        <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Include" defaultValue="usertcqq"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
