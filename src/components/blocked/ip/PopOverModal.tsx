import * as React from "react";
import { Popover } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import BlockedIPModal from "./BlockedIPModal";
import BlockedReasonModal from "./BlockedReasonModal";
import BlockedTimeModal from "./BlockedTimeModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, unblockIPClick } = props;
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
      <AdministratorEmailModal />
      <BlockedIPModal />
      <BlockedReasonModal />
      <BlockedTimeModal />
      <MenuItem onClick={unblockIPClick}>Recently unblock IPs</MenuItem>
    </Popover>
  )
}
