import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import FilterConditions from '../../components/review/job/FilterConditions';
import JobSearch from '../../components/review/job/JobSearch';
import JobDescription from '../../components/jobDetails/JobDescription';

export default function Invitation() {
  return (
    <>
      <ListItem>
        <Typography ml={1}>  Job Invitation </Typography>
      </ListItem>
      <Divider />
      <Box padding="2% 20% 10%">
        <JobSearch />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterConditions />
          </Grid>
          <Grid item xs={9}>
            <JobDescription />
          </Grid>

        </Grid>
      </Box>
    </>
  )
}
