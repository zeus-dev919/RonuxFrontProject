import React from 'react'
import { Typography, Box } from '@mui/material'
export default function VersionDescription() {
  return (
    <Box p={2} marginLeft='1em'>
      <Typography> Version description </Typography>
      <ul>
        <li>Updated header title strings to match spec (d827426)</li>
        <li>Fixed formatting of year month date pattern for year selection dropdown (98c7cd1)</li>
        <li>Fixed issue where default selection date would visually stay selected when choosing different date (8f455c0)</li>
        <li>Updated default selection-based openAt logic to consider valid calendar constraints (5507687)</li>
        <li> Fixed the filled range with RTL layout (ea76386)Delay showing validation error by 1 second (5541f02)</li>
        <li>Updates the color of the month labels in fullscreen mode (c65a262)</li>
      </ul>
    </Box >
  )
}