import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import JobAttachment from '../../components/jobDetails/JobAttachment';
import JobBudget from '../../components/jobDetails/JobBudjet';
import JobDescription from '../../components/jobDetails/JobDescription';
import JobSkills from '../../components/jobDetails/JobSkills';
import JobSearch from '../../components/review/job/JobSearch';

export default function Job() {
  return (
    <>
      <ListItem>
        <Typography ml={1}> Review Job </Typography>
      </ListItem>
      <Divider />
      <Box padding="2% 20% 10%">
        <JobSearch />
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}></Grid>

        </Grid>
      </Box>
    </>
  )
}
