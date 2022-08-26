import * as React from "react";
import {
  Table,
  TableContainer,
  TableFooter,
  Paper,
  Typography,
  Toolbar,
  Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import AdminUserTableBody from "./AdminUserTableBody";
import AdminUserPagination from "./AdminUserPagination";
import PopOverModal from "./PopOverModal";
import { CustomTableHeadWithTwoActions } from "../../commonStyle/CommonStyle";


//Reac API data here
const data = [{
  name: 'Perry Lance',
  type: 'Freelancer',
  status: 'Active',
  sign: '2022-03-10',
  email: 'usertcqq@gmail.com'
}, {
  name: 'Akira Suzuki',
  type: 'Freelancer',
  status: 'Active',
  sign: '2022-03-10',
  email: 'usertcqq@gmail.com'
}, {
  name: 'Perry Lance',
  type: 'Freelancer',
  status: 'Active',
  sign: '2022-03-10',
  email: 'usertcqq@gmail.com'
}, {
  name: 'Perry Lance',
  type: 'Freelancer',
  status: 'Active',
  sign: '2021-03-10',
  email: 'usertcqq@gmail.com'
}]

const deletedData = [{
  name: 'Perry Lance',
  type: 'Freelancer',
  status: 'Active',
  sign: '2022-03-10',
  email: 'usertcqq@gmail.com'
}, {
  name: 'Akira Suzuki',
  type: 'Freelancer',
  status: 'Active',
  sign: '2022-03-10',
  email: 'usertcqq@gmail.com'
}];

export default function UserTable() {
  const [header, setHeader] = React.useState("Currently showing all users");
  const [tableHeader, setTableHeader] = React.useState(["Name", "Types", "Status", "Last sign in time", "User email"]);
  const [rows, setRows] = React.useState(data);
  const [clear, setClear] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);
  //handle event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deletedUserClick = () => {
    setHeader("Currently showing deleted users");
    setTableHeader(["Name", "Types", "Email", "Days remaining before deletion", "Operator"]);
    setRows(deletedData);
    setClear(true);
  }
  const clearClick = () => {
    setClear(false);
    setHeader("Currently showing all users");
    setTableHeader(["Name", "Types", "Status", "Last sign in time", "User email"]);
    setRows(data);
  }
  return (
    <Box className="user-admin-console-container">
      <Toolbar className="user-admin-console-toolbar">
        <Typography className="user-admin-console-typography">
          {header}
        </Typography>
      </Toolbar>
      <Box className="admin-user-console-choose">
        <Box onClick={handleClick} className="user-admin-console-add-filters">
          <AddIcon />
          Add filters
        </Box>
        {clear && <Box onClick={clearClick} className="user-admin-console-clear-filters">Clear filters</Box>}
      </Box>
      <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} deletedUserClick={deletedUserClick} />
      <TableContainer component={Paper}>
        <Table>
          <CustomTableHeadWithTwoActions name={tableHeader} />
          <AdminUserTableBody rows={rows} />
          <TableFooter>
            <AdminUserPagination rows={rows} />
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
