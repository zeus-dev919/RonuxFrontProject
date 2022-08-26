import * as React from "react";
import { Popover } from "@mui/material";
import { MenuItem } from "../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import SkillNameModal from "./SkillNameModal";
import SkillCategoryModal from "./SkillCategoryModal";
import UpdateTimeModal from "./UpdateTimeModal";
import AddTimeModal from "./AddTimeModal";
export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, deletedSkillClick } = props;
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
      <SkillNameModal />
      <SkillCategoryModal />
      <AdministratorEmailModal />
      <AddTimeModal />
      <UpdateTimeModal />
      <MenuItem onClick={deletedSkillClick}>Recently deleted skills</MenuItem>
    </Popover>
  )
}
