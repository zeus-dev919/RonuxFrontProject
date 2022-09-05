import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function VersionModal(props: any) {

  return (
    <CustomModal name="Model" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="include" defaultValue="Pixel XL"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
