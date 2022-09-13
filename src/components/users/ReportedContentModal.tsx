import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
export default function ReportedContentModal(props: any) {

  return (
    <CustomModal name="Reported content" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Job content" />
          <FormControlLabel control={<Checkbox />} label="Job proposal" />
          <FormControlLabel control={<Checkbox />} label="Job invitation" />
          <FormControlLabel control={<Checkbox />} label="Client profile" />
          <FormControlLabel control={<Checkbox />} label="Freelancer profile" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
