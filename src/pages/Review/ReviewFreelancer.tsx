
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
import { CustomTableHeadWithTwoActions } from "../../commonStyle/CommonStyle";
import ReviewFreelancersTableBody from "../../components/reviewFreelancers/ReviewFreelancersTableBody";

//Reac API data here
const data = [{
  name: 'Perry Lance',
  reviewStatus: 'Pending review',
  approvalStatus: 'Approved',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
},
{
  name: 'Perry Lance',
  reviewStatus: 'Pending review',
  approvalStatus: 'Approved',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
},
{
  name: 'Perry Lance',
  reviewStatus: 'Pending review',
  approvalStatus: 'Approved',
  admin: 'Perry Lance',
  applicationTime: '2022-03-10',
  reviewTime: '2022-03-11'
},]


export default function ReviewFreelancer() {
  const tableHeader = ["Name", "Review status", "Approval status", "Administrator", "Application time", "Review time"];
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
        <Typography ml={1}> Review freelancer </Typography>
      </ListItem>
      <Divider />
      <TableBox>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all review freelancers
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
              <CustomTableHeadWithTwoActions name={tableHeader} />
              <ReviewFreelancersTableBody rows={rows} />
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
