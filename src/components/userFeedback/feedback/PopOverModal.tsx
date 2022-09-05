import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";

import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import ReviewTimeModal from "./ReviewTimeModal";
import IDNumberModal from "./IDNumberModal";
import ReviewStatusModal from "./ReviewStatusModal";
import ApplicationTimeModal from "./ApplicationTimeModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [idNumberOpen, setIdNumberOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [reviewStatusOpen, setReviewStatusOpen] = React.useState(false);
  const [reviewTimeOpen, setReviewTimeOpen] = React.useState(false);
  const [appliocationTimeOpen, setApplicationTimeOpen] = React.useState(false);

  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const idNumberClick = () => {
    setIdNumberOpen(true);
    handleClose();
  }
  const usernameClick = () => {
    setUsernameOpen(true);
    handleClose();
  }
  const reviewStatusClick = () => {
    setReviewStatusOpen(true);
    handleClose();
  }
  const reviewTimeClick = () => {
    setReviewTimeOpen(true);
    handleClose();
  }
  const applicationTimeClick = () => {
    setReviewTimeOpen(true);
    handleClose();
  }
  return (
    <Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => usernameClick()}>Username</MenuItem>
        <MenuItem onClick={() => administratorEmailClick()}>Administrator email</MenuItem>
        <MenuItem onClick={() => idNumberClick()}>ID number</MenuItem>
        <MenuItem onClick={() => reviewStatusClick()}>Review status</MenuItem>
        <MenuItem onClick={() => reviewTimeClick()}>Review time</MenuItem>
        <MenuItem onClick={() => applicationTimeClick()}>Application Time</MenuItem>
      </Popover>

      {
        usernameOpen && (
          <UserNameModal onClose={() => setUsernameOpen(false)} />)
      }
      {
        administratorEmailOpen && (
          <AdministratorEmailModal onClose={() => setAdministratorEmailOpen(false)} />)
      }
      {
        idNumberOpen && (
          <IDNumberModal onClose={() => setIdNumberOpen(false)} />)
      }
      {
        reviewStatusOpen && (
          <ReviewStatusModal onClose={() => setReviewStatusOpen(false)} />)
      }
      {
        reviewTimeOpen && (
          <ReviewTimeModal onClose={() => setReviewTimeOpen(false)} />)
      }
      {
        appliocationTimeOpen && (
          <ApplicationTimeModal onClose={() => setApplicationTimeOpen(false)} />)
      }
    </Box>

  )
}
