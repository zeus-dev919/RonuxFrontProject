import * as React from "react";
import { Popover, Box } from "@mui/material";
import UserNameModal from "./UserNameModal";
import FirstNameModal from "./FirstNameModal"
import LastNameModal from "./LastNameModal";
import UserTypesModal from "./UserTypesModal";
import UserEmailModal from "./UserEmailModal";
import AccountStatusModal from "./AccountStatusModal";
import LastSignInModal from "./LastSignInModal";
import JoinDateModal from "./JoinDateModal"
import { MenuItem } from "../../commonStyle/CommonStyle";


export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose, deletedUserClick } = props;
  const [firstNameOpen, setFirstNameOpen] = React.useState(false);
  const [lastNameOpen, setLastNameOpen] = React.useState(false);
  const [userNameOpen, setUserNameOpen] = React.useState(false);
  const [userTypeOpen, setUserTypeOpen] = React.useState(false);
  const [userEmailOpen, setUserEmailOpen] = React.useState(false);
  const [accountStatusOpen, setAccountStatusOpen] = React.useState(false);
  const [joinDateOpen, setJoinDateOpen] = React.useState(false);
  const [lastSignInOpen, setLastSignInOpen] = React.useState(false);
  const firstNameClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const lastNameClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const userNameClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const userTypeClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const userEmailClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const accountStatusClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const joinDateClick = () => {
    setFirstNameOpen(true);
    handleClose();
  }
  const lastSignInClick = () => {
    setFirstNameOpen(true);
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
        <MenuItem onClick={() => firstNameClick()}>First name</MenuItem>
        <MenuItem onClick={() => lastNameClick()}>Last name</MenuItem>
        <MenuItem onClick={() => userNameClick()}>Username</MenuItem>
        <MenuItem onClick={() => userTypeClick()}>User types</MenuItem>
        <MenuItem onClick={() => userEmailClick()}>User email</MenuItem>
        <MenuItem onClick={() => accountStatusClick()}>Account status</MenuItem>
        <MenuItem onClick={() => joinDateClick()}>Join date</MenuItem>
        <MenuItem onClick={() => lastSignInClick()}>Last sign in time</MenuItem>
        <MenuItem onClick={deletedUserClick}>Recently deleted users</MenuItem>
      </Popover>
      {
        firstNameOpen && (
          <FirstNameModal onClose={() => setFirstNameOpen(false)} />)
      }
      {
        lastNameOpen && (
          <LastNameModal onClose={() => setLastNameOpen(false)} />)
      }
      {
        userNameOpen && (
          <UserNameModal onClose={() => setUserNameOpen(false)} />)
      }
      {
        userTypeOpen && (
          <UserTypesModal onClose={() => setUserTypeOpen(false)} />)
      }
      {
        userEmailOpen && (
          <UserEmailModal onClose={() => setUserEmailOpen(false)} />)
      }
      {
        accountStatusOpen && (
          <AccountStatusModal onClose={() => setAccountStatusOpen(false)} />)
      }
      {
        joinDateOpen && (
          <JoinDateModal onClose={() => setJoinDateOpen(false)} />)
      }
      {
        lastSignInOpen && (
          <LastSignInModal onClose={() => setLastSignInOpen(false)} />)
      }
    </Box>

  )
}
