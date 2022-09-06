
import * as React from "react";
import {
  Table,
  TableContainer,
  TableFooter,
  Paper,
  Typography,
  Toolbar,
  Box,
  Divider,
  ListItem
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TableBox } from "../commonStyle/CommonStyle";

import AdminUserPagination from "../components/adminUserModals/AdminUserPagination";
import PopOverModal from "../components/userFeedback/feedback/PopOverModal";
import { CustomTableHeadWithOneActions } from "../commonStyle/CommonStyle";
import TransactionHistoryTableBody from "../components/transactionHistory/TransactionHistoryTableBody";
//Reac API data here
const data = [{
  name: 'Perry Lance',
  status: 'Freelancer',
  amount: 'Google pixel XL',
  time: 'Android5.0',
  id: '1.0',
},]


export default function TransactionHistory() {
  const tableHeader = ["Name", "Transaction status", "Transaction amount", "Transaction time", "Transaction ID"];
  const rows = data;
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);
  //handle event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem>
        <Typography ml={1}> Transaction History </Typography>
      </ListItem>
      <Divider />
      <TableBox>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all transaction histories
            </Typography>
          </Toolbar>
          <Box className="admin-user-console-choose">
            <Box onClick={handleClick} className="user-admin-console-add-filters">
              <AddIcon />
              Add filters
            </Box>
          </Box>
          <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} />
          <TableContainer component={Paper}>
            <Table>
              <CustomTableHeadWithOneActions name={tableHeader} />
              <TransactionHistoryTableBody rows={rows} />
              <TableFooter>
                <AdminUserPagination rows={rows} />
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </TableBox>
    </>
  )
}
