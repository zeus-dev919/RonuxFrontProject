import React from "react";
import { Box, Typography, TextField, FormGroup, FormControlLabel, Checkbox, InputAdornment } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Filter() {
  return (
    <Box marginTop='20px'>
      <Box>
        <Typography style={{ marginTop: '30px', fontSize: '20px', marginBottom: '15px' }}>Filter conditions</Typography>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Currency"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Username"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Contract ID"></TextField>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Contract status</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Pending"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Valid"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="End"
          />
        </FormGroup>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Contract create time</Typography>
        <TextField style={{ marginBottom: '10px' }} placeholder="Start date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
        <TextField style={{ marginBottom: '10px' }} placeholder="End date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
      </Box>
    </Box>
  )
}