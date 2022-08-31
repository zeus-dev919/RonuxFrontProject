import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import FilterConditions from '../../components/review/job/FilterConditions';
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
          <Grid item xs={2}>
            <FilterConditions />
          </Grid>
          <Grid item xs={10}></Grid>

        </Grid>
      </Box>
    </>
  )
}
