import * as React from "react";
import {
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";
export default function SkillCategoryModal(props: any) {

  return (
    <CustomModal name="Blocked ranges">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Frameworks" />
          <FormControlLabel control={<Checkbox />} label="Libraries/APIs" />
          <FormControlLabel control={<Checkbox />} label="Paradigms" />
          <FormControlLabel control={<Checkbox />} label="Storage" />
        </FormGroup>
      </DialogContent>
    </CustomModal>
  );
}
