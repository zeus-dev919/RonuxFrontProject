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
        <MenuItem onClick={() => setLastNameOpen(true)}>Last name</MenuItem>
        <MenuItem onClick={() => setUserNameOpen(true)}>First name</MenuItem>
        <MenuItem onClick={() => setUserTypeOpen(true)}>First name</MenuItem>
        <MenuItem onClick={() => setUserEmailOpen(true)}>First name</MenuItem>
        <MenuItem onClick={() => setAccountStatusOpen(true)}>First name</MenuItem>
        <MenuItem onClick={() => setJoinDateOpen(true)}>First name</MenuItem>
        <MenuItem onClick={() => setLastSignInOpen(true)}>First name</MenuItem>

        <MenuItem onClick={deletedUserClick}>Recently deleted users</MenuItem>
      </Popover>
      {
        firstNameOpen && (
          <FirstNameModal onClose={() => setFirstNameOpen(false)} />)
      }
      {
        lastNameOpen && (
          <LastNameModal />)
      }
      {
        userNameOpen && (
          <UserNameModal />)
      }
      {
        userTypeOpen && (
          <UserTypesModal />)
      }
      {
        userEmailOpen && (
          <UserEmailModal />)
      }
      {
        accountStatusOpen && (
          <AccountStatusModal />)
      }
      {
        joinDateOpen && (
          <JoinDateModal />)
      }
      {
        lastSignInOpen && (
          <LastSignInModal />)
      }
    </Box>

  )
}
