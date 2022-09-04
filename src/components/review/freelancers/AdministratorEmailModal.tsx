import * as React from "react";
import { TextField, DialogContent, DialogContentText, Box } from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function AdministratorEmailModal(props: any) {
  return (
    <Box>
      <CustomModal name="Administrator email" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField fullWidth label="Match" defaultValue="usereds@gmail.com"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </Box>
  );
}
