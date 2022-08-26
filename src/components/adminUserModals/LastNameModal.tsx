import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import CustomModal from "./CustomModal";

export default function LastNameModal() {

  return (
    <div>
      <CustomModal name="Last name">
        <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Include" defaultValue="Lance"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
