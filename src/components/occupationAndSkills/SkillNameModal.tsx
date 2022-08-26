import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";

export default function SkillNameModal() {

  return (
    <div>
      <CustomModal name="Skill name">
        <DialogContent style={{ marginTop: "20px", width: 'fit-content' }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField label="Include" defaultValue="Java"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
