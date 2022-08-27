
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

import AdminUserPagination from "../../components/adminUserModals/AdminUserPagination";
import { CustomTableHeadWithOneActions } from "../../commonStyle/CommonStyle";
import PopOverModal from "../../components/blocked/keyword/PopOverModal";
import AddBlockedKeywordModal from "../../components/blocked/keyword/AddBlockedKeywordModal";
import BlockedKeywordTableBody from "../../components/blocked/keyword/BlockedKeywordTableBody";


//Reac API data here
const data = [{
  keyword: 'Test',
  category: 'Advertising',
  admin: 'Perry Lance',
  ranges: 'profile',
  time: '2022-03-10',
}, {
  keyword: 'Test',
  category: 'Advertising',
  admin: 'Perry Lance',
  ranges: 'profile',
  time: '2022-03-10',
}, {
  keyword: 'Test',
  category: 'Advertising',
  admin: 'Perry Lance',
  ranges: 'profile',
  time: '2022-03-10',
},]

const deletedData = [{
  keyword: 'Test',
  category: 'Advertising',
  admin: 'Perry Lance',
  ranges: 'profile',
  time: '2022-03-10',
},];

export default function BlockedIP() {
  const [header, setHeader] = React.useState("Currently showing all blocked keywords");
  const [tableHeader, setTableHeader] = React.useState(["Blocked keyword", "Blocked category", "Administrator", "Blocked ranges", "Blocked time"]);
  const [rows, setRows] = React.useState(data);
  const [clear, setClear] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [addKeyword, setAddKeyword] = React.useState(false);
  const open = Boolean(anchorEl);
  //handle event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const unblockIPClick = () => {
    setHeader("Currently showing recently unblocked keywords");
    setTableHeader(["Unblock keyword", "Unblock category", "Administrator", "Unblock range", "Days remaining before deletion"]);
    setRows(deletedData);
    setClear(true);
  }
  const clearClick = () => {
    setClear(false);
    setHeader("Currently showing all blocked IPs");
    setTableHeader(["Blocked keyword", "Blocked category", "Administrator", "Blocked ranges", "Blocked time"]);
    setRows(data);
  }
  const addKeywordClick = () => {
    setAddKeyword(false);
    //api here

  }
  return (
    <>
      <ListItem>
        <Typography ml={1}> Blocked keyword </Typography>
      </ListItem>
      <Divider />
      <Box style={{ marginLeft: '7%', marginRight: '7%', marginTop: '4%' }}>
        <Box className="user-admin-console-container">
          <Toolbar className="blocked-toolbar">
            <Typography className="user-admin-console-typography">
              {header}
            </Typography>
            {!clear && <DecideButton onClick={() => setAddKeyword(true)}>Add blocked keyword</DecideButton>}
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
              <BlockedKeywordTableBody rows={rows} />
              <TableFooter>
                <AdminUserPagination rows={rows} />
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <AddBlockedKeywordModal addKeyword={addKeyword} addKeywordClick={addKeywordClick} />
    </>
  )
}
