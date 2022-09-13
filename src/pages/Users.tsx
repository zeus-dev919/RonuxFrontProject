
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
import Pagination from "../components/Pagination";
import PopOverModal from "../components/users/PopOverModal";
import { CustomTableHeadWithTwoActions, TableBox } from "../commonStyle/CommonStyle";
import UsersTableBody from "../components/users/UsersTableBody";
//Reac API data here
const data = [{
  name: 'Perry Lance',
  email: 'cryptotopstar@gmail.com',
  telephone: '102-123-0123'
},
]


export default function Users() {
  const tableHeader = ["Name", "Email", "Telephone",];
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
        <Typography ml={1}> Users </Typography>
      </ListItem>
      <Divider />
      <TableBox>
        <Box className="user-admin-console-container">
          <Toolbar className="user-admin-console-toolbar">
            <Typography className="user-admin-console-typography">
              Currently showing all users
            </Typography>
          </Toolbar>
          <Box className="admin-user-console-choose">
            <Box onClick={handleClick} className="user-admin-console-add-filters">
              <AddIcon />
              Add user
            </Box>
          </Box>
          <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} />
          <TableContainer component={Paper}>
            <Table>
              <CustomTableHeadWithTwoActions name={tableHeader} />
              <UsersTableBody rows={rows} />
              <TableFooter>
                <Pagination rows={rows} />
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </TableBox>
    </>
  )
}
