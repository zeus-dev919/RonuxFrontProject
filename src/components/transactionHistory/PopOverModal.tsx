import * as React from "react";
import { Popover, Box } from "@mui/material";
import { MenuItem } from "../../commonStyle/CommonStyle";

import UserNameModal from "./UserNameModal";
import StatusModal from "./StatusModal";
import AmountModal from "./AmountModal";
import TimeModal from "./TimeModal";
import TransactionModal from "./TransactionModal";
import MerchantModal from "./MerchantModal";


export default function PopOverModal(props: any) {
  const { open, anchorEl, handleClose } = props;
  const [statusOpen, setStatusOpen] = React.useState(false);
  const [amountOpen, setAmountOpen] = React.useState(false);
  const [usernameOpen, setUsernameOpen] = React.useState(false);
  const [timeOpen, setTimeOpen] = React.useState(false);
  const [transactionOpen, setTransactionOpen] = React.useState(false);
  const [merchantOpen, setMerchantOpen] = React.useState(false);


  const usernameClick = () => {
    setUsernameOpen(true);
    handleClose();
  }
  const statusClick = () => {
    setStatusOpen(true);
    handleClose();
  }
  const amountClick = () => {
    setAmountOpen(true);
    handleClose();
  }
  const timeClick = () => {
    setTimeOpen(true);
    handleClose();
  }
  const transactionClick = () => {
    setTransactionOpen(true);
    handleClose();
  }
  const merchantClick = () => {
    setMerchantOpen(true);
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
        <MenuItem onClick={() => usernameClick()}>Username</MenuItem>
        <MenuItem onClick={() => statusClick()}>Transaction status</MenuItem>
        <MenuItem onClick={() => amountClick()}>Transaction amount</MenuItem>
        <MenuItem onClick={() => timeClick()}>Transaction time</MenuItem>
        <MenuItem onClick={() => transactionClick()}>Transaction ID</MenuItem>
        <MenuItem onClick={() => merchantClick()}>Merchant ID</MenuItem>

      </Popover>

      {
        usernameOpen && (
          <UserNameModal onClose={() => setUsernameOpen(false)} />)
      }
      {
        statusOpen && (
          <StatusModal onClose={() => setStatusOpen(false)} />)
      }
      {
        amountOpen && (
          <AmountModal onClose={() => setAmountOpen(false)} />)
      }
      {
        timeOpen && (
          <TimeModal onClose={() => setTimeOpen(false)} />)
      }
      {
        transactionOpen && (
          <TransactionModal onClose={() => setTransactionOpen(false)} />)
      }
      {
        merchantOpen && (
          <MerchantModal onClose={() => setMerchantOpen(false)} />)
      }
    </Box>

  )
}
