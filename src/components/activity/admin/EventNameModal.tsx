import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function EventNameModal(props: any) {

  return (
    <CustomModal name="Event name" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Edit privacy policy" />
          <FormControlLabel control={<Checkbox />} label="Edit terms of service" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
