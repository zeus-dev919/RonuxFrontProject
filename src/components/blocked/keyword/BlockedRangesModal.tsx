import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function BlockedRangesModal(props: any) {

  return (
    <CustomModal name="Blocked ranges">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
