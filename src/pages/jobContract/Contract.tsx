import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import JobSearch from '../../components/review/job/JobSearch';
import JobDescription from '../../components/jobDetails/JobDescription';
import Filter from '../../components/jobContract/contract/Filter';

export default function Contract() {
  return (
    <>
      <ListItem>
        <Typography ml={1}> Job Contract </Typography>
      </ListItem>
      <Divider />
      <Box padding="2% 20% 10%">
        <JobSearch />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Filter />
          </Grid>
          <Grid item xs={9}>
            <JobDescription />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
