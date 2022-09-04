import React from "react";
import { Box, Typography, TextField, FormGroup, FormControlLabel, Checkbox, InputAdornment } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function FilterConditions() {
  return (
    <Box marginTop='20px'>
      <Box>
        <Typography style={{ marginTop: '30px', fontSize: '20px', marginBottom: '15px' }}>Filter conditions</Typography>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Username"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Admin email"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Proposal ID"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Job ID"></TextField>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Filter conditions</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Pending"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Invalid"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Hiring"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Hired"
          />
        </FormGroup>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Review time</Typography>
        <TextField style={{ marginBottom: '10px' }} placeholder="Start date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
        <TextField style={{ marginBottom: '10px' }} placeholder="End date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Post time</Typography>
        <TextField style={{ marginBottom: '10px' }} placeholder="Start date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
        <TextField style={{ marginBottom: '10px' }} placeholder="End date" InputProps={{ endAdornment: <InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>, }}>
        </TextField>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Recently deleted jobs</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Show"
          />

        </FormGroup>
      </Box>
    </Box>
  )
}