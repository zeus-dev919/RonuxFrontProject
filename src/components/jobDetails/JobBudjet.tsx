import { Paper, Typography, Box } from "@mui/material";
import React from "react";

export default function JobBudget() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>
          Budget
        </Typography>
        <Typography>
          ￥ 60 - 100 CNY
        </Typography>
      </Box>

    </Paper>
  )

}