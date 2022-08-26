import { Divider, ListItem, Typography,Box } from '@mui/material';
import React from 'react';
import UserTable from '../components/adminUserModals/UserTable';

export default function UserConsole() {
  return (
    <>
      <ListItem>
        <Typography> User </Typography>
      </ListItem>
      <Divider />
      <Box  style={{marginLeft:'7%',marginRight:'7%', marginTop:'4%', justifyContent:'center'}}>
        <UserTable />
      </Box>
    </>
  )
}
