import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";

import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import ReviewTimeModal from "./ReviewTimeModal";
import IDNumberModal from "./IDNumberModal";
import ReviewStatusModal from "./ReviewStatusModal";
import ApplicationTimeModal from "./ApplicationTimeModal";
import UserTypeModal from "./UserTypeModal";
import ModelModal from "./ModelModal";
import BrandModal from "./BrandModal";
import SystemModal from "./SystmModal";
import VersionModal from "./VersionModal";
import FeedbackIDModal from "./FeedbackIDModal";
import FeedbackTimeModal from "./FeedbackTimeModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [modelOpen, setModelOpen] = React.useState(false);
  const [userTypeOpen, setUserTypeOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [brandOpen, setBrandOpen] = React.useState(false);
  const [systemOpen, setSystemOpen] = React.useState(false);
  const [versionOpen, setVersionOpen] = React.useState(false);
  const [feedbackIDOpen, setFeedbackIDOpen] = React.useState(false);
  const [feedbackTimeOpen, setFeedbackTimeOpen] = React.useState(false);

  const usernameClick = () => {
    setUsernameOpen(true);
    handleClose();
  }
  const userTypeClick = () => {
    setUserTypeOpen(true);
    handleClose();
  }
  const modelClick = () => {
    setModelOpen(true);
    handleClose();
  }
  const brandClick = () => {
    setBrandOpen(true);
    handleClose();
  }
  const systemClick = () => {
    setSystemOpen(true);
    handleClose();
  }
  const versionClick = () => {
    setVersionOpen(true);
    handleClose();
  }
  const feedbackIDClick = () => {
    setFeedbackIDOpen(true);
    handleClose();
  }
  const feedbackTimeClick = () => {
    setFeedbackTimeOpen(true);
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
        <MenuItem onClick={() => userTypeClick()}>User type</MenuItem>
        <MenuItem onClick={() => modelClick()}>Model</MenuItem>
        <MenuItem onClick={() => brandClick()}>Brand</MenuItem>
        <MenuItem onClick={() => systemClick()}>System</MenuItem>
        <MenuItem onClick={() => versionClick()}>Version</MenuItem>
        <MenuItem onClick={() => feedbackIDClick()}>Feedback ID</MenuItem>
        <MenuItem onClick={() => feedbackTimeClick()}>Feedback time</MenuItem>
      </Popover>

      {
        usernameOpen && (
          <UserNameModal onClose={() => setUsernameOpen(false)} />)
      }
      {
        userTypeOpen && (
          <UserTypeModal onClose={() => setUserTypeOpen(false)} />)
      }
      {
        modelOpen && (
          <ModelModal onClose={() => setModelOpen(false)} />)
      }
      {
        brandOpen && (
          <BrandModal onClose={() => setBrandOpen(false)} />)
      }
      {
        systemOpen && (
          <SystemModal onClose={() => setSystemOpen(false)} />)
      }
      {
        versionOpen && (
          <VersionModal onClose={() => setVersionOpen(false)} />)
      }
      {
        feedbackIDOpen && (
          <FeedbackIDModal onClose={() => setFeedbackIDOpen(false)} />)
      }
      {
        feedbackTimeOpen && (
          <FeedbackTimeModal onClose={() => setFeedbackTimeOpen(false)} />)
      }
    </Box>

  )
}
