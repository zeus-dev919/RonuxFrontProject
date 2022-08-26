
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
import { TableBox } from "../../commonStyle/CommonStyle";

import AdminUserPagination from "../../components/adminUserModals/AdminUserPagination";
import PopOverModal from "../../components/activity/admin/PopOverModal";
import AdminActivityTableHead from "../../components/activity/admin/AdminActivityTableHead";
import AdminActivityTableBody from "../../components/activity/admin/AdminActivityTableBody";
//Reac API data here
const data = [{
  name: 'Assign role',
  desc: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}, {
  name: 'Assign role',
  desc: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}, {
  name: 'Assign role',
  desc: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
  ip: '84.17.34.152'
}]


export default function ReviewID() {
  const tableHeader = ["Name", "Review status", "Administrator", "Application time", "Review time"];
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
        <Typography ml={1}> Admin activity log </Typography>
      </ListItem>
      <Divider />
      <TableBox>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all review identitiy verification
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
              <AdminActivityTableHead name={tableHeader} />
              <AdminActivityTableBody rows={rows} />
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
