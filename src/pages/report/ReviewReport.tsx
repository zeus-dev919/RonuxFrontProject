
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
import ReviewReportTableBody from "../../components/report/review/ReviewReportTableBody";
//Reac API data here
const data = [{
  name: 'Perry Lance',
  quantity: '10',
  content: 'Job content',
  admin: 'perry lance',
  status: 'reviewed',
  time: '2020-03-10'
}, {
  name: 'Perry Lance',
  quantity: '10',
  content: 'Job content',
  admin: 'perry lance',
  status: 'reviewed',
  time: '2020-03-10'
},
]


export default function ReviewReport() {
  const tableHeader = ["Name", "Reported quantity", "Reported content", "Administartor", "Review status", "Review time"];
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
        <Typography ml={1}> Review report </Typography>
      </ListItem>
      <Divider />
      <TableBox>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all review reports
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
              <ReviewReportTableBody rows={rows} />
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
