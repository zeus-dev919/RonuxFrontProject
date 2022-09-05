import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";

import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import ReportIDModal from "./ReportIDModal";
import ReviewStatusModal from "./ReviewStatusModal";
import ReviewTimeModal from "./ReviewTimeModal";
import ReportedContentModal from "./ReportedContentModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [reportIDOpen, setReportIDOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [reportedContentOpen, setReportedContentOpen] = React.useState(false);
  const [reviewStatusOpen, setReviewStatusOpen] = React.useState(false);
  const [reviewTimeOpen, setReviewTimeOpen] = React.useState(false);

  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const reportIDClick = () => {
    setReportIDOpen(true);
    handleClose();
  }
  const usernameClick = () => {
    setUsernameOpen(true);
    handleClose();
  }
  const reportedContentClick = () => {
    setReportedContentOpen(true);
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
        <MenuItem onClick={() => reportIDClick()}>Report ID</MenuItem>
        <MenuItem onClick={() => reportedContentClick()}>Reported content</MenuItem>
        <MenuItem onClick={() => reviewStatusClick()}>Review status</MenuItem>
        <MenuItem onClick={() => reviewTimeClick()}>Review time</MenuItem>

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
        reportIDOpen && (
          <ReportIDModal onClose={() => setReportIDOpen(false)} />)
      }
      {
        reportedContentOpen && (
          <ReportedContentModal onClose={() => setReportedContentOpen(false)} />)
      }
      {
        reviewStatusOpen && (
          <ReviewStatusModal onClose={() => setReviewStatusOpen(false)} />)
      }
      {
        reviewTimeOpen && (
          <ReviewTimeModal onClose={() => setReviewTimeOpen(false)} />)
      }
    </Box>

  )
}
