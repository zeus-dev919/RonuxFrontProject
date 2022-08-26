import { Divider, ListItem, Typography, Box } from '@mui/material';
import React from 'react';
import ClientBasicInfo from '../../components/profile/client/ClientBasicInfo';
import ClientPicture from '../../components/profile/client/ClientPicture';
import ClientUserInfo from '../../components/profile/client/ClientUserInfo';
import JobFeedback from '../../components/profile/client/JobFeedback';

export default function ClientProfile() {
  return (
    <>
      <ListItem>
        <Typography ml={1}> Client profile </Typography>
      </ListItem>
      <Divider />
      <Box padding="5% 15% 10%" display="flex">
        <Box padding="10px" width='40%'>
          <ClientPicture />
          <ClientBasicInfo />
          <ClientUserInfo />
        </Box>
        <Box width='60%'>
          <JobFeedback />
        </Box>

      </Box>
    </>
  )
}
