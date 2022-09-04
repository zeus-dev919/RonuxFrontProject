import * as React from "react";
import {
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material";
import { CustomModal } from "../../commonStyle/CommonStyle";

export default function SkillNameModal(props: any) {

  return (
    <div>
      <CustomModal name="Skill name" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField fullWidth label="Include" defaultValue="Java"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </div>
  );
}
