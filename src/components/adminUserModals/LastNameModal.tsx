import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
export default function LastNameModal(props: any) {

  return (
    <div>
      <CustomModal name="Last name" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Include" defaultValue="Lance"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
