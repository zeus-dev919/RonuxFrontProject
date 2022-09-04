import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";

import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import ReviewTimeModal from "./ReviewTimeModal";
import ReviewStatusModal from "./ReviewStatusModal";
import ApplicationTimeModal from "./ApplicationTimeModal";
import ApprovalStatusModal from "./ApprovalStatusModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [approvalStatusOpen, setApprovalStatusOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [reviewStatusOpen, setReviewStatusOpen] = React.useState(false);
  const [reviewTimeOpen, setReviewTimeOpen] = React.useState(false);
  const [appliocationTimeOpen, setApplicationTimeOpen] = React.useState(false);

  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const approvalStatusClick = () => {
    setApprovalStatusOpen(true);
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
        <MenuItem onClick={() => reviewStatusClick()}>Review status</MenuItem>
        <MenuItem onClick={() => approvalStatusClick()}>Approval status</MenuItem>
        <MenuItem onClick={() => applicationTimeClick()}>Application Time</MenuItem>
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
        approvalStatusOpen && (
          <ApprovalStatusModal onClose={() => setApprovalStatusOpen(false)} />)
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
