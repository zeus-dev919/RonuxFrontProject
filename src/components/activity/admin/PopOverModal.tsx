import * as React from "react";
import { Popover } from "@mui/material";
import EventNameModal from "./EventNameModal";
import UserNameModal from "./UserNameModal";
import AdministratorEmailModal from "./AdministratorEmailModal";
import AccessTimeModal from "./AccessTimeModal";
import AccessIPModal from "./AccessIPModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  return (
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
      <EventNameModal />
      <UserNameModal />
      <AdministratorEmailModal />
      <AccessTimeModal />
      <AccessIPModal />
    </Popover>
  )
}
