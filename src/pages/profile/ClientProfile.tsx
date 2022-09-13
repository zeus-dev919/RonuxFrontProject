import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
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
      <Grid padding="5% 15% 10%" container>
        <Grid paddingRight="10px" item xs={12} md={12} lg={5}>
          <ClientPicture />
          <ClientBasicInfo />
          <ClientUserInfo />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <JobFeedback />
        </Grid>
      </Grid>
      {/* <Box padding="5% 15% 10%" display="flex">
        <Box paddingRight="10px" width='40%'>
          <ClientPicture />
          <ClientBasicInfo />
          <ClientUserInfo />
        </Box>
        <Box width='60%'>
          <JobFeedback />
        </Box>

      </Box> */}
    </>
  )
}
