import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { SeeMoreBox } from '../../../commonStyle/CommonStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Experience() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>Experience</Typography>
        <Typography>
          Android Developer
        </Typography>
        <Typography>
          Google 2016 to date
        </Typography>
        <Typography>
          Developed a platform to host JS web apps in a native Android container with built-in support for auto update, offline mode, and push notification support.
        </Typography>
      </Box>
      <SeeMoreBox >
        <Typography justifyContent='center'>See more</Typography>
        <KeyboardArrowDownIcon />
      </SeeMoreBox>
    </Paper>
  )
}