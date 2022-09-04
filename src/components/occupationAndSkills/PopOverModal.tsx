import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../commonStyle/CommonStyle";
import AdministratorEmailModal from "./AdministratorEmailModal";
import SkillNameModal from "./SkillNameModal";
import SkillCategoryModal from "./SkillCategoryModal";
import UpdateTimeModal from "./UpdateTimeModal";
import AddTimeModal from "./AddTimeModal";
export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, deletedSkillClick } = props;
  const [skillNameOpen, setSkillNameOpen] = React.useState(false);
  const [skillCategoryOpen, setSkillCategoryOpen] = React.useState(false);
  const [administratorEmailOpen, setAdministratorEmailOpen] = React.useState(false);
  const [addTimeOpen, setAddTimeOpen] = React.useState(false);
  const [updateTimeOpen, setUpdateTimeOpen] = React.useState(false);
  const administratorEmailClick = () => {
    setAdministratorEmailOpen(true);
    handleClose();
  }
  const skillNameClick = () => {
    setSkillNameOpen(true);
    handleClose();
  }
  const skillCategoryClick = () => {
    setSkillCategoryOpen(true);
    handleClose();
  }
  const addTimeClick = () => {
    setAddTimeOpen(true);
    handleClose();
  }
  const updateTimeClick = () => {
    setUpdateTimeOpen(true);
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
        <MenuItem onClick={() => skillNameClick()}>Skill name</MenuItem>
        <MenuItem onClick={() => skillCategoryClick()}>Skill category</MenuItem>
        <MenuItem onClick={() => administratorEmailClick()}>Administrator email</MenuItem>
        <MenuItem onClick={() => addTimeClick()}>Add time</MenuItem>
        <MenuItem onClick={() => updateTimeClick()}>Update time</MenuItem>
        <MenuItem onClick={deletedSkillClick}>Recently deleted skills</MenuItem>
      </Popover>
      {
        administratorEmailOpen && (
          <AdministratorEmailModal onClose={() => setAdministratorEmailOpen(false)} />)
      }
      {
        skillNameOpen && (
          <SkillNameModal onClose={() => setSkillNameOpen(false)} />)
      }
      {
        skillCategoryOpen && (
          <SkillCategoryModal onClose={() => setSkillCategoryOpen(false)} />)
      }
      {
        addTimeOpen && (
          <AddTimeModal onClose={() => setAddTimeOpen(false)} />)
      }
      {
        updateTimeOpen && (
          <UpdateTimeModal onClose={() => setUpdateTimeOpen(false)} />)
      }
    </Box>

  )
}
