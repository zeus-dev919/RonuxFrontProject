import * as React from "react";
import { Popover } from "@mui/material";
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
  const [joinDateOpen, setJoinDateOpen] = React.useState(false);
  const [lastSignInOpen, setLastSignInOpen] = React.useState(false);

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
      <FirstNameModal />
      <LastNameModal />
      <UserNameModal />
      <UserTypesModal />
      <UserEmailModal />
      <AccountStatusModal />
      <JoinDateModal />
      <LastSignInModal />
      <MenuItem onClick={deletedUserClick}>Recently deleted users</MenuItem>
    </Popover>

  )
}
