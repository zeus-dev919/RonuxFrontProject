import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function ClientBasicInfo() {
  return (
    <Paper style={{marginBottom:'20px', border:'1px solid #cccccc'}}>
      <Box margin='20px'>
      <Typography style={{fontSize:'20px', marginBottom:'20px'}}>
        Basic Information
      </Typography>
      <Box sx={{display:'flex'}}>
        <Typography marginBottom='10px'>
          Location:
        </Typography>
        <Typography>
          China - Liaoning - Dalian
        </Typography>
      </Box>
      <Box sx={{display:'flex'}}>
        <Typography>
          Join date:
        </Typography>
        <Typography>
          2020-03-06
        </Typography>
      </Box>
      </Box>
    </Paper>
  )
}
