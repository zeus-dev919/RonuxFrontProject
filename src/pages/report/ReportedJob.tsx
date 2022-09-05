import { Divider, ListItem, Typography, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import JobAttachment from '../../components/review/jobDetails/JobAttachment';
import JobBudget from '../../components/review/jobDetails/JobBudjet';
import JobDescription from '../../components/review/jobDetails/JobDescription';
import JobSkills from '../../components/review/jobDetails/JobSkills';

export default function ReportedJob() {
  const { reportId } = useParams();
  return (
    <>
      <ListItem>
        <Typography ml={1}>Reported Job  </Typography>
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
