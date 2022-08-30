import { Paper, Typography, Avatar, Box } from "@mui/material";
import React from "react";
import DeleteJobModal from "./DeleteJobModal";
import MarkModal from "./MarkModal";

export default function JobDescription() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography>
          <span>Job ID:</span>
          <span>0123456789</span>
        </Typography>
        <Box style={{ display: 'flex', width: 'fit-content', margin: '10px' }}>
          <Avatar style={{ marginRight: '10px' }} />
          <Box>
            <Typography>Perry lance</Typography>
            <Typography>2020-03-10</Typography>
          </Box>
        </Box >
        <Typography>
          Android app development for Ronux
        </Typography>
        <Typography>
          An experienced Android developer to work on rounx App. We need someone to work on building the front-end services.
        </Typography>
        <Typography>
          This project requires experience with:
          1. Experience building Android applications in Java (or Kotlin) using the Android SDK
          2. Experience in understanding large and complex code bases
          In your proposal, please share a brief summary of your experience and tell us about a recent Android project, ideally one currently available on Google Play.
        </Typography>
        <Typography>
          <span>Job status: </span>
          <span color="#cccccc">Valid</span>
        </Typography>
        <Typography>
          <span>Review status: </span>
          <span color="#cccccc">Pending review</span>
        </Typography>
        <DeleteJobModal />
        <MarkModal />
      </Box>
    </Paper>
  )

}