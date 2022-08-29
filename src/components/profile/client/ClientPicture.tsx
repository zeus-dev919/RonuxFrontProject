import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Badge, Paper, Typography, } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function ClientPicture() {
  return (
    <Paper style={{ marginBottom: '20px' }}>
      <Box margin='20px'>
        <Box>
          <img
            src="logo.png"
            alt="userpicture"
          />
        </Box>
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="logo.png" />
          </StyledBadge>
        </Box>
        <Box>
          <Typography>Alex Lance</Typography>
          <Typography>@alexlance</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
