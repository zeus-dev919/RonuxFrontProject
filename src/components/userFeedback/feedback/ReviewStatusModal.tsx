import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function ReviewStatusModal(props: any) {

  return (
    <CustomModal name="Review status" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Pending review" />
          <FormControlLabel control={<Checkbox />} label="Approved" />
          <FormControlLabel control={<Checkbox />} label="Unapproved" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
