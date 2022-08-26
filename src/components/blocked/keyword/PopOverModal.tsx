import * as React from "react";
import { Popover } from "@mui/material";
import { MenuItem } from "../../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import BlockedCategoriesModal from "./BlockedCategoriesModal";
import BlockedRangesModal from "./BlockedRangesModal";
import BlockedKeywordModal from "./BlockedKeywordModal";
import BlockedTimeModal from "../ip/BlockedTimeModal";
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
      <BlockedKeywordModal />
      <BlockedCategoriesModal />
      <BlockedRangesModal />
      <BlockedTimeModal />
      <MenuItem onClick={unblockIPClick}>Recently unblock Keywords</MenuItem>
    </Popover>
  )
}
