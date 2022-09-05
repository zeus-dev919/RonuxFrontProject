import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function BrandModal(props: any) {

  return (
    <CustomModal name="Brand" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="include" defaultValue="Google"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
