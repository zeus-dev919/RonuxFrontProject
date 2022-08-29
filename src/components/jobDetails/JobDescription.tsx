import { Paper, Typography, Avatar, Box } from "@mui/material";
import React from "react";
import { BlueButton } from "../../commonStyle/CommonStyle";
import DeleteJobModal from "./DeleteJobModal";
import MarkModal from "./MarkModal";

export default function JobDescription() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Typography>
          Job ID:
        </Typography>
        <Typography>
          0123456789
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
          Job status:
        </Typography>
        <Typography>
          Review status:
        </Typography>
        <DeleteJobModal />
        <MarkModal />
      </Box>

    </Paper>
  )

}