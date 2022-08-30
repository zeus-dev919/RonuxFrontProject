import React from 'react'
import { Typography, Box, Button } from '@mui/material'
export default function VersionInfo() {
  return (
    <Box p={2}>
      <Typography> 2.1.0 (4) - Release version </Typography>
      <Typography>
        <span>Creator:</span>
        <Button sx={{ textTransform: "none" }} >Perry Lance</Button>
      </Typography>
      <Typography>
        <span>Create time: </span>
      </Typography>
      <Typography>
        <span>Release time: </span>
      </Typography>
      <Typography>
        <span>Update time: </span>
      </Typography>
    </Box>
  )
}