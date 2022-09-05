import { Divider, ListItem, Typography, Box } from '@mui/material';
import React from 'react';
import JobAttachment from '../../components/review/jobDetails/JobAttachment';
import JobBudget from '../../components/review/jobDetails/JobBudjet';
import JobDescription from '../../components/review/jobDetails/JobDescription';
import JobSkills from '../../components/review/jobDetails/JobSkills';

export default function JobDetails() {
  return (
    <>
      <ListItem>
        <Typography ml={1}> Identity verification information </Typography>
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
