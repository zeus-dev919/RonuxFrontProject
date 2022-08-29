import { Paper, Typography, Box, Chip } from "@mui/material";
import React from "react";

export default function JobSkills() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>
          Skills (Development)
        </Typography>
        <Chip label="Android" variant="outlined" />
      </Box>

    </Paper>
  )

}