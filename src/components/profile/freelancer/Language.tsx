import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { SeeMoreBox } from '../../../commonStyle/CommonStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import Rating from '@mui/material/Rating';


export default function Language() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography marginBottom='20px'>Languages</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Typography>
              English
            </Typography>
            <Typography>
              Fluent
            </Typography>
          </Box>
          <Rating
            readOnly
            value={3}
            icon={<CircleIcon />}
            emptyIcon={<CircleIcon />}
          />
        </Box>


      </Box>
      <SeeMoreBox >
        <Typography justifyContent='center'>See more</Typography>
        <KeyboardArrowDownIcon />
      </SeeMoreBox>
    </Paper>
  )
}