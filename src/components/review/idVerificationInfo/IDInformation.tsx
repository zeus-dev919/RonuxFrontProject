import { Paper, Typography, Avatar, Box } from "@mui/material";
import React from "react";
import DeleteJobModal from "../jobDetails/DeleteJobModal";
import MarkModal from "../jobDetails/MarkModal";

export default function IDInformation() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box padding='20px'>
        <Box style={{ display: 'flex', width: 'fit-content', margin: '10px' }}>
          <Avatar style={{ marginRight: '10px' }} />
          <Box>
            <Typography>Perry lance</Typography>
            <Typography>2020-03-10</Typography>
          </Box>
        </Box >
        <Typography>
          <span>First name:</span>
          <span style={{ color: '#cccccc', marginBottom: '20px' }}>Perry</span>
          <span>Last name: </span>
          <span style={{ color: '#cccccc' }}>Lance</span>
        </Typography>
        <Typography>
          <span>ID type:</span>
          <span style={{ color: '#cccccc', marginBottom: '20px' }}>id card</span>
          <span>ID number: </span>
          <span style={{ color: '#cccccc' }}>01235</span>
        </Typography>
        <Typography>
          <span>Review status:</span>
          <span style={{ color: '#cccccc', marginBottom: '20px' }}>unapproved</span>
          <span>Administrator: </span>
          <span style={{ color: '#cccccc' }}>Perry Lance</span>
          <span>Review time:</span>
          <span style={{ color: '#cccccc' }}>2010-03-12</span>
        </Typography>
        <DeleteJobModal />
        <MarkModal />
      </Box>
    </Paper>
  )

}