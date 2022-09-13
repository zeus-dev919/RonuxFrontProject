import * as React from 'react';
import { styled, Avatar, Box, Badge, Paper, Typography, } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    // '&::after': {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '50%',
    //   animation: 'ripple 1.2s infinite ease-in-out',
    //   border: '1px solid currentColor',
    //   content: '""',
    // },
  },
  // '@keyframes ripple': {
  //   '0%': {
  //     transform: 'scale(.8)',
  //     opacity: 1,
  //   },
  //   '100%': {
  //     transform: 'scale(2.4)',
  //     opacity: 0,
  //   },
  // },
}));

export default function ClientPicture() {
  return (
    <Paper style={{ marginBottom: '20px', height: '40%' }}>
      <img
        width='100%'
        height='50%'
        src="/back.png"
        alt="userpicture"
      />
      <Box padding='20px'>
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{ marginTop: '-20%' }}
          >
            <Avatar sx={{ width: '90px', height: '90px' }} alt="Remy Sharp" src="/avatar.png" />
          </StyledBadge>

        </Box>
        <Box>
          <Typography mt={3}>Alex Lance</Typography>
          <Typography className='typography-soft'>@alexlance</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
