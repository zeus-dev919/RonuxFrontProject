import { Paper, Typography, Box } from "@mui/material";
import React from "react";

export default function JobAttachment() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>
          Attachments
        </Typography>
      </Box>
    </Paper>
  )

}