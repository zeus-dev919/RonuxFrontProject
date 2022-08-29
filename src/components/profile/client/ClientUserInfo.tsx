import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function ClientUserInfo() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box margin='20px'>
        <Typography style={{ fontSize: '20px', marginBottom: '20px' }}>
          User Information
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography marginBottom='10px'>
            Account status:
          </Typography>
          <Typography>
            Active
          </Typography>
          <Typography>
            Paused (Pause 2020-03-06)
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography marginBottom='10px' >
            User type:
          </Typography>
          <Typography>
            Client
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography marginBottom='10px'>
            User email:
          </Typography>
          <Typography>
            alexlance@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography >
            Last sign in:
          </Typography>
          <Typography>
            2020-03-10
          </Typography>
        </Box>
      </Box>

    </Paper>
  )
}
