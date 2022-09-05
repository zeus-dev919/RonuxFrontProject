import { Paper, Typography, Avatar, Box } from "@mui/material";
import React from "react";
import { FlexBox } from "../../../commonStyle/CommonStyle";
import DeleteJobModal from "./DeleteJobModal";
import MarkModal from "./MarkModal";

export default function JobDescription() {
  return (
    <Paper variant="outlined" style={{ marginTop: '10px', marginBottom: '20px' }}>
      <Box padding='20px'>
        <Typography mb={2}>
          <span>Job ID:</span>
          <span>0123456789</span>
        </Typography>
        <FlexBox mb={2}>
          <Avatar style={{ marginRight: '10px' }} />
          <Box>
            <Typography>Perry lance</Typography>
            <Typography>2020-03-10</Typography>
          </Box>
        </FlexBox >
        <Typography fontWeight='bold' mb={2}>
          Android app development for Ronux
        </Typography>
        <Typography mb={2}>
          An experienced Android developer to work on rounx App. We need someone to work on building the front-end services.
        </Typography>
        <Typography mb={2}>
          This project requires experience with:
          1. Experience building Android applications in Java (or Kotlin) using the Android SDK
          2. Experience in understanding large and complex code bases
        </Typography>
        <Typography mb={2}>
          In your proposal, please share a brief summary of your experience and tell us about a recent Android project, ideally one currently available on Google Play.
        </Typography>
        <FlexBox mt={2} mb={2}>
          <Typography mr={4} >
            <span>Job status: </span>
            <span color="#cccccc">Valid</span>
          </Typography>
          <Typography>
            <span>Review status: </span>
            <span color="#cccccc">Pending review</span>
          </Typography></FlexBox>

        <FlexBox>
          <DeleteJobModal />
          <MarkModal />
        </FlexBox>

      </Box>
    </Paper>
  )

}