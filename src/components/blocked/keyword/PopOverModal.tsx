import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import BlockedCategoriesModal from "./BlockedCategoriesModal";
import BlockedRangesModal from "./BlockedRangesModal";
import BlockedKeywordModal from "./BlockedKeywordModal";
import BlockedTimeModal from "./BlockedTimeModal";
export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, unblockKeywordClick } = props;
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [blockedKeywordOpen, setBlockedKeywordOpen] = React.useState(false);
  const [blockedCategoriesOpen, setBlockedCategoriesOpen] = React.useState(false);
  const [blockedRangesOpen, setBlockedRangesOpen] = React.useState(false);
  const [blockedTimeOpen, setBlockedTimeOpen] = React.useState(false);
  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const blockedKeywordClick = () => {
    setBlockedKeywordOpen(true);
    handleClose();
  }
  const blockedCategoriesClick = () => {
    setBlockedCategoriesOpen(true);
    handleClose();
  }
  const blockedRangesClick = () => {
    setBlockedRangesOpen(true);
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
        <MenuItem onClick={() => blockedKeywordClick()}>Blocked Keyword</MenuItem>
        <MenuItem onClick={() => blockedCategoriesClick()}>Blocked categories</MenuItem>
        <MenuItem onClick={() => blockedRangesClick()}>Blocked ranges</MenuItem>
        <MenuItem onClick={() => blockedTimeClick()}>Blocked time</MenuItem>
        <MenuItem onClick={unblockKeywordClick}>Recently unblock Keywords</MenuItem>
      </Popover>
      {
        administratorEmailOpen && (
          <AdministratorEmailModal onClose={() => setAdministratorEmailOpen(false)} />)
      }
      {
        blockedKeywordOpen && (
          <BlockedKeywordModal onClose={() => setBlockedKeywordOpen(false)} />)
      }
      {
        blockedCategoriesOpen && (
          <BlockedCategoriesModal onClose={() => setBlockedCategoriesOpen(false)} />)
      }
      {
        blockedRangesOpen && (
          <BlockedRangesModal onClose={() => setBlockedRangesOpen(false)} />)
      }
      {
        blockedTimeOpen && (
          <BlockedTimeModal onClose={() => setBlockedTimeOpen(false)} />)
      }
    </Box>
  )
}
