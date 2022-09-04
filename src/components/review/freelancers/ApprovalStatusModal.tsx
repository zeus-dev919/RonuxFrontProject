import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function ApprovalStatusModal(props: any) {

  return (
    <CustomModal name="Approval status" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Approved" />
          <FormControlLabel control={<Checkbox />} label="Unapproved" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
