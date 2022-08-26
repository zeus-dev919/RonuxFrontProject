
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

import UserActivityTableBody from "../../components/activity/user/UserActivityTableBody";
import UserActivityTableHead from "../../components/activity/user/UserActivityTableHead";
import AdminUserPagination from "../../components/adminUserModals/AdminUserPagination";
import PopOverModal from "../../components/activity/user/PopOverModal";


//Read API data here
const data = [{
  name: 'Assign role',
  desc: 'Post violation information',
  user: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}, {
  name: 'Assign role',
  desc: 'Post violation information',
  user: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}, {
  name: 'Assign role',
  desc: 'Post violation information',
  user: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}]

export default function UserActivityLog() {
  const tableHeader = ["Event name", "Event description", "User", "Access time", "Access IP"];
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
        <Typography ml={1}> User activity log </Typography>
      </ListItem>
      <Divider />
      <Box style={{ marginLeft: '7%', marginRight: '7%', marginTop: '4%' }}>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all user activity logs
            </Typography>
          </Toolbar>
          <div className="admin-user-console-choose">
            <div onClick={handleClick} className="user-admin-console-add-filters">
              <AddIcon />
              Add filters
            </div>
          </div>
          <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} />
          <TableContainer component={Paper}>
            <Table>
              <UserActivityTableHead name={tableHeader} />
              <UserActivityTableBody rows={rows} />
              <TableFooter>
                <AdminUserPagination rows={rows} />
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}
