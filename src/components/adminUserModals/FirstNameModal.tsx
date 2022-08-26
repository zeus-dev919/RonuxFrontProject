import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import CustomModal from "./CustomModal";

export default function FirstNameModal(props: any) {

  return (
    <CustomModal name="First name">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Include" defaultValue="Perry"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
