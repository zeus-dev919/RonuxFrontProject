import React from 'react'
import { Box, Typography, Paper, Chip } from '@mui/material'
import { SeeMoreBox } from '../../../commonStyle/CommonStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Skills() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>Skills (Development)</Typography>
        <Chip variant="outlined" label='Android'></Chip>
      </Box>
      <SeeMoreBox >
        <Typography justifyContent='center'>See more</Typography>
        <KeyboardArrowDownIcon />
      </SeeMoreBox>
    </Paper>
  )
}