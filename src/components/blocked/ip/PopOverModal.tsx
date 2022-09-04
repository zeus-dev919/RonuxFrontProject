import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import BlockedIPModal from "./BlockedIPModal";
import BlockedReasonModal from "./BlockedReasonModal";
import BlockedTimeModal from "./BlockedTimeModal";

export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, unblockIPClick } = props;
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [blockedIPOpen, setBlockedIPOpen] = React.useState(false);
  const [blockedReasonOpen, setBlockedReasonOpen] = React.useState(false);
  const [blockedTimeOpen, setBlockedTimeOpen] = React.useState(false);
  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const blockedIPClick = () => {
    setBlockedIPOpen(true);
    handleClose();
  }
  const blockedReasonClick = () => {
    setBlockedReasonOpen(true);
    handleClose();
  }
  const blockedTimeClick = () => {
    setBlockedTimeOpen(true);
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
        <MenuItem onClick={() => administratorEmailClick()}>Administrator email</MenuItem>
        <MenuItem onClick={() => blockedIPClick()}>Blocked IP</MenuItem>
        <MenuItem onClick={() => blockedReasonClick()}>Blocked reason</MenuItem>
        <MenuItem onClick={() => blockedTimeClick()}>Blocked time</MenuItem>
        <MenuItem onClick={unblockIPClick}>Recently unblock IPs</MenuItem>
      </Popover>
      {
        administratorEmailOpen && (
          <AdministratorEmailModal onClose={() => setAdministratorEmailOpen(false)} />)
      }
      {
        blockedIPOpen && (
          <BlockedIPModal onClose={() => setBlockedIPOpen(false)} />)
      }
      {
        blockedReasonOpen && (
          <BlockedReasonModal onClose={() => setBlockedReasonOpen(false)} />)
      }
      {
        blockedTimeOpen && (
          <BlockedTimeModal onClose={() => setBlockedTimeOpen(false)} />)
      }
    </Box>
  )
}
