import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function ClientUserInfo() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box margin='20px'>
        <Typography style={{ fontSize: '20px', marginBottom: '20px' }}>
          User Information
        </Typography>
        <Typography marginBottom='10px'>
          Account status:
          <span>Active | </span>
          <span>Paused (Pause 2020-03-06)</span>
        </Typography>
        <Typography marginBottom='10px' >
          User type:
          <span> Client</span>
        </Typography>
        <Typography>
          User email:
          <span>alexlance@gmail.com</span>
        </Typography>
        <Typography>
          Last sign in:
          <span> 2020-03-10</span>
        </Typography>
      </Box>
    </Paper>
  )
}
