import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  Checkbox,
  FormControlLabel,
  FormGroup
} from "@mui/material";
import CustomModal from "./CustomModal";

export default function UserTypesModal() {
  return (
    <div>
      <CustomModal name="User types">
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Client"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Freelancer"
              />
            </FormGroup>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
