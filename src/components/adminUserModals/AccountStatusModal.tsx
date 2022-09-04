import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  Checkbox,
  FormControlLabel,
  FormGroup
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
export default function AdminStatusModal(props: any) {
  return (
    <div>
      <CustomModal name="Account status" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Active"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Paused"
              />
            </FormGroup>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
