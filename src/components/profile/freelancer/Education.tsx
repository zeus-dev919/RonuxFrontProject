import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { SeeMoreBox } from '../../../commonStyle/CommonStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Education() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>Education</Typography>
        <Typography>
          Computer Science and Technology
        </Typography>
        <Typography>
          Google 2016 to date
        </Typography>
        <Typography>
          Studied general computer programming and applied skills and graduated with a diploma in computer studies.
        </Typography>
      </Box>
      <SeeMoreBox >
        <Typography justifyContent='center'>See more</Typography>
        <KeyboardArrowDownIcon />
      </SeeMoreBox>
    </Paper>
  )
}