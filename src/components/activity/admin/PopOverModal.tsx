import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";

import EventNameModal from "./EventNameModal";
import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import AccessTimeModal from "./AccessTimeModal";
import AccessIPModal from "./AccessIPModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [eventNameOpen, setEventNameOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [accessTimeOpen, setAccessTimeOpen] = React.useState(false);
  const [accessIPOpen, setAccessIPOpen] = React.useState(false);
  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const eventNameClick = () => {
    setEventNameOpen(true);
    handleClose();
  }
  const usernameClick = () => {
    setUsernameOpen(true);
    handleClose();
  }
  const accessTimeClick = () => {
    setAccessTimeOpen(true);
    handleClose();
  }
  const accessIPClick = () => {
    setAccessIPOpen(true);
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
        <MenuItem onClick={() => eventNameClick()}>Event name</MenuItem>
        <MenuItem onClick={() => usernameClick()}>Username</MenuItem>
        <MenuItem onClick={() => administratorEmailClick()}>Administrator email</MenuItem>
        <MenuItem onClick={() => accessTimeClick()}>Access time</MenuItem>
        <MenuItem onClick={() => accessIPClick()}>Access IP</MenuItem>
      </Popover>

      {
        eventNameOpen && (
          <EventNameModal onClose={() => setEventNameOpen(false)} />)
      }
      {
        usernameOpen && (
          <UserNameModal onClose={() => setUsernameOpen(false)} />)
      }
      {
        administratorEmailOpen && (
          <AdministratorEmailModal onClose={() => setAdministratorEmailOpen(false)} />)
      }
      {
        accessTimeOpen && (
          <AccessTimeModal onClose={() => setAccessTimeOpen(false)} />)
      }
      {
        accessIPOpen && (
          <AccessIPModal onClose={() => setAccessIPOpen(false)} />)
      }
    </Box>

  )
}
