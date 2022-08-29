import { Divider, ListItem, Typography, Box } from '@mui/material';
import React from 'react';
import JobAttachment from '../../components/jobDetails/JobAttachment';
import JobBudget from '../../components/jobDetails/JobBudjet';
import JobDescription from '../../components/jobDetails/JobDescription';
import JobSkills from '../../components/jobDetails/JobSkills';

export default function JobDetails() {
  return (
    <>
      <ListItem>
        <Typography ml={1}> Client profile </Typography>
      </ListItem>
      <Divider />
      <Box padding="5% 20% 10%">
        <JobDescription />
        <JobSkills />
        <JobAttachment />
        <JobBudget />
      </Box>
    </>
  )
}
