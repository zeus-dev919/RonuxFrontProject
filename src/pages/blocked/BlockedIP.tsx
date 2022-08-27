
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
import { DecideButton } from "../../commonStyle/CommonStyle";

import BlockedIPTableBody from "../../components/blocked/ip/BlockedIPTableBody";
import AdminUserPagination from "../../components/adminUserModals/AdminUserPagination";
import { CustomTableHeadWithOneActions } from "../../commonStyle/CommonStyle";
import AddBlockedIPModal from "../../components/blocked/ip/AddBlockedIPModal";
import PopOverModal from "../../components/blocked/ip/PopOverModal";


//Reac API data here
const data = [{
  url: '192.5.48.231',
  reason: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
}, {
  url: '192.5.48.231',
  reason: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
}, {
  url: '192.5.48.231',
  reason: 'Post violation information',
  admin: 'Perry Lance',
  time: '2022-03-10',
}]

const deletedData = [{
  url: '192.5.48.231',
  reason: 'operation error',
  admin: 'Perry Lance',
  time: 'Can be restored in 18 days',
},];

export default function BlockedIP() {
  const [header, setHeader] = React.useState("Currently showing all blocked IPs");
  const [tableHeader, setTableHeader] = React.useState(["Blocked IP", "Blocked reason", "Administrator", "Blocked time"]);
  const [rows, setRows] = React.useState(data);
  const [clear, setClear] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [addIP, setAddIP] = React.useState(false);
  const open = Boolean(anchorEl);
  //handle event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const unblockIPClick = () => {
    setHeader("Currently showing recently unblocked IPs");
    setTableHeader(["Unblock IP", "Unblock reason", "Administrator", "Days remaining before deletion"]);
    setRows(deletedData);
    setClear(true);
  }
  const clearClick = () => {
    setClear(false);
    setHeader("Currently showing all blocked IPs");
    setTableHeader(["Blocked IP", "Blocked reason", "Administrator", "Blocked time"]);
    setRows(data);
  }
  const addIPClick = () => {
    setAddIP(false);
  }
  return (
    <>
      <ListItem>
        <Typography ml={1}> Blocked IP </Typography>
      </ListItem>
      <Divider />
      <Box style={{ marginLeft: '7%', marginRight: '7%', marginTop: '4%' }}>
        <Box className="user-admin-console-container">
          <Toolbar className="blocked-toolbar">
            <Typography className="user-admin-console-typography">
              {header}
            </Typography>
            {!clear && <DecideButton onClick={() => setAddIP(true)}>Add blocked IP</DecideButton>}
          </Toolbar>
          <div className="admin-user-console-choose">
            <div onClick={handleClick} className="user-admin-console-add-filters">
              <AddIcon />
              Add filters
            </div>
            {clear && <div onClick={clearClick} className="user-admin-console-clear-filters">Clear filters</div>}
          </div>
          <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} unblockIPClick={unblockIPClick} />
          <TableContainer component={Paper}>
            <Table>
              <CustomTableHeadWithOneActions name={tableHeader} />
              <BlockedIPTableBody rows={rows} />
              <TableFooter>
                <AdminUserPagination rows={rows} />
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <AddBlockedIPModal addIP={addIP} addIPClick={addIPClick} />
    </>
  )
}
