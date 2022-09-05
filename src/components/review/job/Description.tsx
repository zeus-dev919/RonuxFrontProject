import { Paper, Typography, Avatar, Box, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FlexBox } from "../../../commonStyle/CommonStyle";
import DeleteJobModal from "./DeleteJobModal";
import MarkModal from "./MarkModal";

const skills = ['Android', 'Java', 'Kotlin'];
export default function Description(props: any) {
  let navigate = useNavigate();
  return (
    <Paper onClick={() => navigate(`/jobs/${props.idx}`)} variant="outlined" style={{ marginTop: '10px', marginBottom: '20px' }}>
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
        {skills.map((skill, index) => {
          return (
            <Chip key={index} variant="outlined" label={skill} sx={{ marginRight: '5px', background: 'white' }} />

          )
        })}
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