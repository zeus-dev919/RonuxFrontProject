import * as React from "react";
import { TextField, DialogContent, DialogContentText, Box } from "@mui/material";
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function AccessIPModal(props: any) {
  return (
    <Box>
      <CustomModal name="Access IP" onClose={props.onClose}>
        <DialogContent style={{ marginTop: "20px" }}>
          <DialogContentText style={{ marginTop: "20px" }} >
            <TextField fullWidth label="Match" defaultValue="84.17.34.152"></TextField>
          </DialogContentText>
        </DialogContent>
      </CustomModal>
    </Box>
  );
}
