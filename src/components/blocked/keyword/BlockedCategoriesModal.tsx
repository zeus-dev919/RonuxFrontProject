import * as React from "react";
import {
  DialogContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";
export default function BlockedCategoriesModal(props: any) {

  return (
    <CustomModal name="Blocked categories">
      <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
    </CustomModal>
  );
}
