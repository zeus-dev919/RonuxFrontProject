import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { SeeMoreBox } from '../../../commonStyle/CommonStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function About() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>About</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam in scelerisque sem. Mauris volutpat, dolor id interdum ullamcorper, risus dolor egestas lectus, sit amet mattis purus dui nec risus. Maecenas non sodales nisi, vel dictum dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse blandit eleifend diam, vel rutrum tellus vulputate quis...
        </Typography>
      </Box>
      <SeeMoreBox >
        <Typography justifyContent='center'>See more</Typography>
        <KeyboardArrowDownIcon />
      </SeeMoreBox>
    </Paper>
  )
}