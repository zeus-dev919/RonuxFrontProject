import { Divider, ListItem, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import FilterConditions from '../../components/proposal/jobproposal/FilterConditions';
import JobSearch from '../../components/proposal/jobproposal/JobSearch';
import Description from '../../components/proposal/jobproposal/Description';

export default function Proposal() {
  return (
    <>
      <ListItem>
        <Typography ml={1}>  Job Proposal </Typography>
      </ListItem>
      <Divider />
      <Box padding="2% 20% 10%">
        <JobSearch />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterConditions />
          </Grid>
          <Grid item xs={9}>
            <Description />
          </Grid>

        </Grid>
      </Box>
    </>
  )
}
