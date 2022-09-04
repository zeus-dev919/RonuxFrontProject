
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
import PopOverModal from "../../components/review/id/PopOverModal";
import { CustomTableHeadWithOneActions } from "../../commonStyle/CommonStyle";
import ReviewIDTableBody from "../../components/review/id/ReviewIDTableBody";
//Reac API data here
const data = [{
  name: 'Perry Lance',
  status: 'Pending review',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
}, {
  name: 'Perry Lance',
  status: 'Pending review',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
}, {
  name: 'Perry Lance',
  status: 'Pending review',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
},]


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
        <Typography ml={1}> Review identity verification </Typography>
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
              <CustomTableHeadWithOneActions name={tableHeader} />
              <ReviewIDTableBody rows={rows} />
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
